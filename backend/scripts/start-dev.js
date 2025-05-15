/**
 * Development script to run both frontend and backend services
 * This uses the concurrently package to run both services in a single terminal
 */

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Find the frontend directory
const rootDir = path.resolve(__dirname, '../..');
const frontendDir = path.join(rootDir, 'great-insure');

// Check if frontend exists
if (!fs.existsSync(frontendDir)) {
  console.error(`Frontend directory not found at ${frontendDir}`);
  console.error('Make sure the great-insure directory is in the same parent directory as the backend');
  process.exit(1);
}

// Colors for output
const colors = {
  backend: '\x1b[36m%s\x1b[0m', // Cyan
  frontend: '\x1b[35m%s\x1b[0m', // Magenta
  info: '\x1b[32m%s\x1b[0m',     // Green
  error: '\x1b[31m%s\x1b[0m'     // Red
};

console.log(colors.info, '🚀 Starting development servers...');
console.log(colors.info, '📂 Backend: ' + path.resolve(__dirname, '..'));
console.log(colors.info, '📂 Frontend: ' + frontendDir);

// Check for .env.local in frontend, create if doesn't exist
const envFilePath = path.join(frontendDir, '.env.local');
if (!fs.existsSync(envFilePath)) {
  console.log(colors.info, '📝 Creating .env.local file for frontend...');
  const envContent = `# Backend API URL - points to our local backend server
BACKEND_API_URL=http://localhost:5000/api

# Environment
NEXT_PUBLIC_ENV=development

# Enable API debugging
NEXT_PUBLIC_DEBUG_API=true
`;
  
  try {
    fs.writeFileSync(envFilePath, envContent);
    console.log(colors.info, '✅ Created .env.local file for frontend');
  } catch (err) {
    console.error(colors.error, '❌ Failed to create .env.local file:');
    console.error(err);
  }
}

// Start backend
const backendProcess = spawn('npm', ['run', 'dev'], {
  cwd: path.resolve(__dirname, '..'),
  stdio: 'pipe',
  shell: true
});

// Start frontend
const frontendProcess = spawn('npm', ['run', 'dev'], {
  cwd: frontendDir,
  stdio: 'pipe',
  shell: true
});

// Handle backend output
backendProcess.stdout.on('data', (data) => {
  console.log(colors.backend, '[BACKEND] ' + data.toString().trim());
});

backendProcess.stderr.on('data', (data) => {
  console.error(colors.backend, '[BACKEND] ' + data.toString().trim());
});

// Handle frontend output
frontendProcess.stdout.on('data', (data) => {
  console.log(colors.frontend, '[FRONTEND] ' + data.toString().trim());
});

frontendProcess.stderr.on('data', (data) => {
  console.error(colors.frontend, '[FRONTEND] ' + data.toString().trim());
});

// Handle process termination
process.on('SIGINT', () => {
  console.log(colors.info, '🛑 Shutting down development servers...');
  backendProcess.kill('SIGINT');
  frontendProcess.kill('SIGINT');
});

backendProcess.on('close', (code) => {
  console.log(colors.info, `Backend process exited with code ${code}`);
  // Kill frontend if backend dies
  frontendProcess.kill('SIGINT');
  process.exit(code);
});

frontendProcess.on('close', (code) => {
  console.log(colors.info, `Frontend process exited with code ${code}`);
  // Kill backend if frontend dies
  backendProcess.kill('SIGINT');
  process.exit(code);
}); 