package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/joho/godotenv"
)

// Configuration struct for the application
type Config struct {
	AppwriteEndpoint               string
	AppwriteProjectID              string
	AppwriteAPIKey                 string
	AppwriteDatabaseID             string
	AppwriteCollectionPolicies     string
	AppwriteCollectionTransactions string
	TheGraphEndpoint               string
	SyncInterval                   time.Duration
}

// Load configuration from environment variables
func loadConfig() (*Config, error) {
	err := godotenv.Load()
	if err != nil {
		log.Println("Warning: .env file not found, using environment variables")
	}

	syncInterval := 5 * time.Minute
	if val := os.Getenv("SYNC_INTERVAL_MINUTES"); val != "" {
		minutes := 5
		fmt.Sscanf(val, "%d", &minutes)
		syncInterval = time.Duration(minutes) * time.Minute
	}

	return &Config{
		AppwriteEndpoint:               getEnv("APPWRITE_ENDPOINT", "https://cloud.appwrite.io/v1"),
		AppwriteProjectID:              getEnv("APPWRITE_PROJECT_ID", ""),
		AppwriteAPIKey:                 getEnv("APPWRITE_API_KEY", ""),
		AppwriteDatabaseID:             getEnv("APPWRITE_DATABASE_ID", ""),
		AppwriteCollectionPolicies:     getEnv("APPWRITE_COLLECTION_POLICIES_ID", ""),
		AppwriteCollectionTransactions: getEnv("APPWRITE_COLLECTION_TRANSACTIONS_ID", ""),
		TheGraphEndpoint:               getEnv("THE_GRAPH_ENDPOINT", ""),
		SyncInterval:                   syncInterval,
	}, nil
}

// Helper function to get environment variables with fallback
func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}

// GraphQL query to fetch recent policies from The Graph
func buildPoliciesQuery(lastSync string) string {
	return fmt.Sprintf(`{
		policies(where: { created_at_gt: "%s" }, orderBy: created_at, orderDirection: asc, first: 100) {
			id
			owner
			riskPoolId
			coverageAmount
			premium
			startTime
			endTime
			status
			locationLat
			locationLon
			triggerType
			triggerThreshold
			createdAt
			claimTime
		}
	}`, lastSync)
}

// GraphQL query to fetch recent transactions from The Graph
func buildTransactionsQuery(lastSync string) string {
	return fmt.Sprintf(`{
		transactions(where: { timestamp_gt: "%s" }, orderBy: timestamp, orderDirection: asc, first: 100) {
			id
			type
			amount
			timestamp
			status
			policyId
			riskPoolId
			sender
			receiver
			txHash
		}
	}`, lastSync)
}

// Structure for GraphQL request
type GraphQLRequest struct {
	Query     string                 `json:"query"`
	Variables map[string]interface{} `json:"variables,omitempty"`
}

// Structure for GraphQL response
type GraphQLResponse struct {
	Data   map[string]json.RawMessage `json:"data"`
	Errors []map[string]interface{}   `json:"errors,omitempty"`
}

// Query The Graph for data
func queryTheGraph(endpoint string, query string) (*GraphQLResponse, error) {
	requestBody, err := json.Marshal(GraphQLRequest{Query: query})
	if err != nil {
		return nil, fmt.Errorf("error marshalling query: %w", err)
	}

	resp, err := http.Post(endpoint, "application/json", bytes.NewBuffer(requestBody))
	if err != nil {
		return nil, fmt.Errorf("error making GraphQL request: %w", err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, fmt.Errorf("error reading response body: %w", err)
	}

	if resp.StatusCode != http.StatusOK {
		return nil, fmt.Errorf("GraphQL request failed with status %d: %s", resp.StatusCode, string(body))
	}

	var graphqlResp GraphQLResponse
	if err := json.Unmarshal(body, &graphqlResp); err != nil {
		return nil, fmt.Errorf("error unmarshalling GraphQL response: %w", err)
	}

	if len(graphqlResp.Errors) > 0 {
		return nil, fmt.Errorf("GraphQL errors: %v", graphqlResp.Errors)
	}

	return &graphqlResp, nil
}

// Policy structure to match Solana smart contract
type Policy struct {
	ID               string  `json:"id"`
	Owner            string  `json:"owner"`
	RiskPoolID       string  `json:"riskPoolId"`
	CoverageAmount   string  `json:"coverageAmount"`
	Premium          string  `json:"premium"`
	StartTime        int64   `json:"startTime"`
	EndTime          int64   `json:"endTime"`
	Status           string  `json:"status"`
	LocationLat      float64 `json:"locationLat"`
	LocationLon      float64 `json:"locationLon"`
	TriggerType      string  `json:"triggerType"`
	TriggerThreshold string  `json:"triggerThreshold"`
	CreatedAt        int64   `json:"createdAt"`
	ClaimTime        *int64  `json:"claimTime"`
}

// Transaction structure to match blockchain transactions
type Transaction struct {
	ID         string `json:"id"`
	Type       string `json:"type"`
	Amount     string `json:"amount"`
	Timestamp  int64  `json:"timestamp"`
	Status     string `json:"status"`
	PolicyID   string `json:"policyId"`
	RiskPoolID string `json:"riskPoolId"`
	Sender     string `json:"sender"`
	Receiver   string `json:"receiver"`
	TxHash     string `json:"txHash"`
}

// Convert blockchain policies to Appwrite format
func convertPolicyForAppwrite(policy Policy) map[string]interface{} {
	result := map[string]interface{}{
		"blockchainId":   policy.ID,
		"owner":          policy.Owner, // Keep the wallet address in the owner field for querying
		"riskPoolId":     policy.RiskPoolID,
		"coverageAmount": policy.CoverageAmount,
		"premiumAmount":  policy.Premium,
		"coverageStart":  time.Unix(policy.StartTime, 0).Format(time.RFC3339),
		"coverageEnd":    time.Unix(policy.EndTime, 0).Format(time.RFC3339),
		"status":         policy.Status,
		"location": map[string]interface{}{
			"latitude":  policy.LocationLat,
			"longitude": policy.LocationLon,
		},
		"triggers": map[string]interface{}{
			"type":      policy.TriggerType,
			"threshold": policy.TriggerThreshold,
		},
		"createdAt": time.Unix(policy.CreatedAt, 0).Format(time.RFC3339),
	}

	if policy.ClaimTime != nil {
		result["claimedAt"] = time.Unix(*policy.ClaimTime, 0).Format(time.RFC3339)
	}

	return result
}

// Convert blockchain transactions to Appwrite format
func convertTransactionForAppwrite(tx Transaction) map[string]interface{} {
	transactionTime := time.Unix(tx.Timestamp, 0).Format(time.RFC3339)

	result := map[string]interface{}{
		"blockchainId": tx.ID,
		"type":         tx.Type,
		"amount":       tx.Amount,
		"timestamp":    transactionTime,
		"status":       tx.Status,
		"onChain":      true,
		"txHash":       tx.TxHash,
		"sender":       tx.Sender,
		"receiver":     tx.Receiver,
	}

	// Add relationship data if available
	if tx.PolicyID != "" {
		result["relatedEntity"] = map[string]interface{}{
			"type":       "Policy",
			"id":         tx.PolicyID,
			"identifier": tx.PolicyID,
		}
	} else if tx.RiskPoolID != "" {
		result["relatedEntity"] = map[string]interface{}{
			"type":       "RiskPool",
			"id":         tx.RiskPoolID,
			"identifier": tx.RiskPoolID,
		}
	}

	return result
}

// Sync policies from The Graph to Appwrite
func syncPolicies(config *Config, lastSync string) (string, error) {
	log.Println("Syncing policies from blockchain...")
	query := buildPoliciesQuery(lastSync)

	resp, err := queryTheGraph(config.TheGraphEndpoint, query)
	if err != nil {
		return lastSync, err
	}

	var policies []Policy
	if err := json.Unmarshal(resp.Data["policies"], &policies); err != nil {
		return lastSync, fmt.Errorf("error parsing policies data: %w", err)
	}

	log.Printf("Found %d policies to sync", len(policies))

	latestTimestamp := lastSync

	for _, policy := range policies {
		// Convert policy to Appwrite format
		policyData := convertPolicyForAppwrite(policy)

		// Check if policy already exists by querying Appwrite via HTTP
		appwriteURL := fmt.Sprintf("%s/databases/%s/collections/%s/documents",
			config.AppwriteEndpoint,
			config.AppwriteDatabaseID,
			config.AppwriteCollectionPolicies)

		// Build filter query parameter for blockchainId
		filterQuery := fmt.Sprintf("queries[]=(blockchainId=%s)", policy.ID)
		listURL := fmt.Sprintf("%s?%s", appwriteURL, filterQuery)

		req, err := http.NewRequest("GET", listURL, nil)
		if err != nil {
			log.Printf("Error creating request: %v", err)
			continue
		}

		// Add Appwrite headers
		req.Header.Add("X-Appwrite-Project", config.AppwriteProjectID)
		req.Header.Add("X-Appwrite-Key", config.AppwriteAPIKey)
		req.Header.Add("Content-Type", "application/json")

		client := &http.Client{}
		listResp, err := client.Do(req)
		if err != nil {
			log.Printf("Error checking for existing policy: %v", err)
			continue
		}
		defer listResp.Body.Close()

		body, err := ioutil.ReadAll(listResp.Body)
		if err != nil {
			log.Printf("Error reading response body: %v", err)
			continue
		}

		var documentsResponse struct {
			Total     int                      `json:"total"`
			Documents []map[string]interface{} `json:"documents"`
		}

		if err := json.Unmarshal(body, &documentsResponse); err != nil {
			log.Printf("Error parsing response: %v", err)
			continue
		}

		timestamp := time.Unix(policy.CreatedAt, 0).Format(time.RFC3339)
		if timestamp > latestTimestamp {
			latestTimestamp = timestamp
		}

		// Update or create policy based on response
		if documentsResponse.Total > 0 {
			// Update existing policy
			documentID := documentsResponse.Documents[0]["$id"].(string)
			updateURL := fmt.Sprintf("%s/%s", appwriteURL, documentID)

			jsonData, err := json.Marshal(policyData)
			if err != nil {
				log.Printf("Error marshalling policy data: %v", err)
				continue
			}

			updateReq, err := http.NewRequest("PATCH", updateURL, bytes.NewBuffer(jsonData))
			if err != nil {
				log.Printf("Error creating update request: %v", err)
				continue
			}

			// Add Appwrite headers
			updateReq.Header.Add("X-Appwrite-Project", config.AppwriteProjectID)
			updateReq.Header.Add("X-Appwrite-Key", config.AppwriteAPIKey)
			updateReq.Header.Add("Content-Type", "application/json")

			updateResp, err := client.Do(updateReq)
			if err != nil {
				log.Printf("Error updating policy: %v", err)
				continue
			}
			updateResp.Body.Close()

			if updateResp.StatusCode >= 200 && updateResp.StatusCode < 300 {
				log.Printf("Updated policy: %s", policy.ID)
			} else {
				log.Printf("Failed to update policy %s: status %d", policy.ID, updateResp.StatusCode)
			}
		} else {
			// Create new policy
			jsonData, err := json.Marshal(policyData)
			if err != nil {
				log.Printf("Error marshalling policy data: %v", err)
				continue
			}

			createReq, err := http.NewRequest("POST", appwriteURL, bytes.NewBuffer(jsonData))
			if err != nil {
				log.Printf("Error creating POST request: %v", err)
				continue
			}

			// Add Appwrite headers
			createReq.Header.Add("X-Appwrite-Project", config.AppwriteProjectID)
			createReq.Header.Add("X-Appwrite-Key", config.AppwriteAPIKey)
			createReq.Header.Add("Content-Type", "application/json")

			createResp, err := client.Do(createReq)
			if err != nil {
				log.Printf("Error creating policy: %v", err)
				continue
			}
			createResp.Body.Close()

			if createResp.StatusCode >= 200 && createResp.StatusCode < 300 {
				log.Printf("Created policy: %s", policy.ID)
			} else {
				log.Printf("Failed to create policy %s: status %d", policy.ID, createResp.StatusCode)
			}
		}
	}

	return latestTimestamp, nil
}

// Sync transactions from The Graph to Appwrite
func syncTransactions(config *Config, lastSync string) (string, error) {
	log.Println("Syncing transactions from blockchain...")
	query := buildTransactionsQuery(lastSync)

	resp, err := queryTheGraph(config.TheGraphEndpoint, query)
	if err != nil {
		return lastSync, err
	}

	var transactions []Transaction
	if err := json.Unmarshal(resp.Data["transactions"], &transactions); err != nil {
		return lastSync, fmt.Errorf("error parsing transactions data: %w", err)
	}

	log.Printf("Found %d transactions to sync", len(transactions))

	latestTimestamp := lastSync

	for _, tx := range transactions {
		// Convert transaction to Appwrite format
		txData := convertTransactionForAppwrite(tx)

		// Check if transaction already exists by querying Appwrite via HTTP
		appwriteURL := fmt.Sprintf("%s/databases/%s/collections/%s/documents",
			config.AppwriteEndpoint,
			config.AppwriteDatabaseID,
			config.AppwriteCollectionTransactions)

		// Build filter query parameter for txHash
		filterQuery := fmt.Sprintf("queries[]=(txHash=%s)", tx.TxHash)
		listURL := fmt.Sprintf("%s?%s", appwriteURL, filterQuery)

		req, err := http.NewRequest("GET", listURL, nil)
		if err != nil {
			log.Printf("Error creating request: %v", err)
			continue
		}

		// Add Appwrite headers
		req.Header.Add("X-Appwrite-Project", config.AppwriteProjectID)
		req.Header.Add("X-Appwrite-Key", config.AppwriteAPIKey)
		req.Header.Add("Content-Type", "application/json")

		client := &http.Client{}
		listResp, err := client.Do(req)
		if err != nil {
			log.Printf("Error checking for existing transaction: %v", err)
			continue
		}
		defer listResp.Body.Close()

		body, err := ioutil.ReadAll(listResp.Body)
		if err != nil {
			log.Printf("Error reading response body: %v", err)
			continue
		}

		var documentsResponse struct {
			Total     int                      `json:"total"`
			Documents []map[string]interface{} `json:"documents"`
		}

		if err := json.Unmarshal(body, &documentsResponse); err != nil {
			log.Printf("Error parsing response: %v", err)
			continue
		}

		timestamp := time.Unix(tx.Timestamp, 0).Format(time.RFC3339)
		if timestamp > latestTimestamp {
			latestTimestamp = timestamp
		}

		// Create transaction if it doesn't exist (transactions are immutable)
		if documentsResponse.Total == 0 {
			// Create new transaction
			jsonData, err := json.Marshal(txData)
			if err != nil {
				log.Printf("Error marshalling transaction data: %v", err)
				continue
			}

			createReq, err := http.NewRequest("POST", appwriteURL, bytes.NewBuffer(jsonData))
			if err != nil {
				log.Printf("Error creating POST request: %v", err)
				continue
			}

			// Add Appwrite headers
			createReq.Header.Add("X-Appwrite-Project", config.AppwriteProjectID)
			createReq.Header.Add("X-Appwrite-Key", config.AppwriteAPIKey)
			createReq.Header.Add("Content-Type", "application/json")

			createResp, err := client.Do(createReq)
			if err != nil {
				log.Printf("Error creating transaction: %v", err)
				continue
			}
			createResp.Body.Close()

			if createResp.StatusCode >= 200 && createResp.StatusCode < 300 {
				log.Printf("Created transaction: %s", tx.ID)
			} else {
				log.Printf("Failed to create transaction %s: status %d", tx.ID, createResp.StatusCode)
			}
		}
	}

	return latestTimestamp, nil
}

func main() {
	log.Println("Starting Solana blockchain sync to Appwrite...")

	// Load configuration
	config, err := loadConfig()
	if err != nil {
		log.Fatalf("Failed to load configuration: %v", err)
	}

	// Initial sync timestamp (30 days ago)
	lastPolicySyncTime := time.Now().AddDate(0, 0, -30).Format(time.RFC3339)
	lastTxSyncTime := time.Now().AddDate(0, 0, -30).Format(time.RFC3339)

	// Sync loop
	for {
		// Sync policies
		newPolicySyncTime, err := syncPolicies(config, lastPolicySyncTime)
		if err != nil {
			log.Printf("Error syncing policies: %v", err)
		} else {
			lastPolicySyncTime = newPolicySyncTime
			log.Printf("Policies synced successfully, newest timestamp: %s", lastPolicySyncTime)
		}

		// Sync transactions
		newTxSyncTime, err := syncTransactions(config, lastTxSyncTime)
		if err != nil {
			log.Printf("Error syncing transactions: %v", err)
		} else {
			lastTxSyncTime = newTxSyncTime
			log.Printf("Transactions synced successfully, newest timestamp: %s", lastTxSyncTime)
		}

		log.Printf("Sync completed. Waiting %v for next sync...", config.SyncInterval)
		time.Sleep(config.SyncInterval)
	}
}
