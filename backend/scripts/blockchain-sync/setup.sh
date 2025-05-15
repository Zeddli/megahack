#!/bin/bash

# Install Go dependencies for the blockchain sync service
echo "Installing Go dependencies for blockchain sync service..."
cd "$(dirname "$0")"
go mod tidy

# Copy environment file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file from template..."
  cp ../../.env.example .env
fi

echo "Setup complete. You can now run the blockchain sync service using 'go run main.go'" 