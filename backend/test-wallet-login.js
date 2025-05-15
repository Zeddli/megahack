// Test script for wallet login
const http = require('http');

// Sample wallet address for testing
const testWalletAddress = '8dHGnDdgmLtxTgZmXo8YK8W2RJPbWCy5jCbVYxEZRs1U';

// API endpoint configuration
const options = {
  hostname: 'localhost',
  port: 5000,
  path: '/api/auth/wallet-login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
};

// Prepare request data
const data = JSON.stringify({
  walletAddress: testWalletAddress
});

console.log('Sending test request to wallet login endpoint...');
console.log(`URL: http://${options.hostname}:${options.port}${options.path}`);
console.log(`Payload: ${data}`);

// Create and send the request
const req = http.request(options, (res) => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  
  let responseData = '';
  
  res.on('data', (chunk) => {
    responseData += chunk;
  });
  
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(responseData);
      console.log('Response body:', JSON.stringify(parsedData, null, 2));
    } catch (e) {
      console.log('Raw response:', responseData);
    }
    
    // Exit the process when done
    process.exit(0);
  });
});

req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
  console.error(`Error details: ${e.stack}`);
  console.error(`Error code: ${e.code}`);
  process.exit(1);
});

// Set a timeout for the request
req.setTimeout(5000, () => {
  console.error('Request timed out after 5 seconds');
  req.destroy();
  process.exit(1);
});

// Write data to request body
req.write(data);
req.end(); 