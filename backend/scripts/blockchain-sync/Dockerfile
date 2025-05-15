FROM golang:1.19-alpine AS builder

WORKDIR /app

# Install git for go mod download
RUN apk add --no-cache git

# Download dependencies first (for better caching)
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code
COPY . .

# Build the Go application
RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o blockchain-sync .

# Use a smaller image for the final container
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /app/

# Copy the binary from the builder stage
COPY --from=builder /app/blockchain-sync .

# Copy the environment file
COPY .env* .

# Run the binary
CMD ["./blockchain-sync"] 