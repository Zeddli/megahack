// Simple test server
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  
  // Set CORS headers for all responses
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Echo back request details
  let body = '';
  
  req.on('data', (chunk) => {
    body += chunk.toString();
    console.log('Received data chunk:', chunk.toString());
  });
  
  req.on('end', () => {
    console.log('Request body:', body);
    
    // Respond with request details
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      success: true,
      message: 'Test server running properly',
      request: {
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: body ? JSON.parse(body) : null
      },
      data: {
        user: {
          id: '12345',
          email: 'test@example.com'
        },
        accessToken: 'mock-token-' + Date.now(),
        refreshToken: 'mock-refresh-' + Date.now(),
        expiresIn: 3600
      }
    }));
  });
});

const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Simple test server running at http://localhost:${PORT}`);
  console.log('This server will respond to any request with 200 OK');
  console.log(`Test with: curl -X POST http://localhost:${PORT}/api/auth/wallet-login -H "Content-Type: application/json" -d '{"walletAddress":"testAddress"}'`);
}); 