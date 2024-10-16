#!/usr/bin/env bash

# Define your image and container names
IMAGE_NAME="humanity-touch-community-organization"
CONTAINER_NAME="humanity-touch-community-organization"
PORT=3000

# Kill and remove the current Docker container
echo "Killing and removing the current Docker container..."
docker stop $CONTAINER_NAME && docker rm $CONTAINER_NAME

# Optionally, remove old Docker images to free up space
echo "Removing old Docker images..."
docker image prune -a -f

# Build the Docker image
echo "Building the Docker image..."
docker build -t $CONTAINER_NAME .

# Run the Docker container
echo "Starting the Docker container..."
docker run --restart always --name $CONTAINER_NAME -d -p 9801:$PORT $IMAGE_NAME

echo "Deployment completed successfully."