// Simple mock server for wallet authentication
const http = require('http');
const url = require('url');

// Configure the server
const PORT = 5000;

// Create the server
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Parse URL and only accept wallet-login endpoint
  const parsedUrl = url.parse(req.url, true);
  
  if (req.method === 'POST' && parsedUrl.pathname === '/api/auth/wallet-login') {
    let body = '';
    
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        // Parse the request body
        const data = JSON.parse(body);
        const { walletAddress } = data;
        
        // Validate wallet address
        if (!walletAddress) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({
            success: false,
            message: 'Wallet address is required'
          }));
          return;
        }
        
        // Mock success response with tokens
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          message: 'Wallet login successful',
          data: {
            user: {
              id: '12345',
              email: `user-${walletAddress.substring(0, 8)}@example.com`,
              walletAddress: walletAddress,
              fullName: 'Demo User'
            },
            accessToken: 'mock-access-token-' + Date.now(),
            refreshToken: 'mock-refresh-token-' + Date.now(),
            expiresIn: 3600
          }
        }));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: false,
          message: 'Error processing request: ' + error.message
        }));
      }
    });
  } else {
    // Handle 404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: false,
      message: 'Not found'
    }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Mock wallet authentication server running at http://localhost:${PORT}`);
  console.log(`Endpoint available: http://localhost:${PORT}/api/auth/wallet-login`);
}); 