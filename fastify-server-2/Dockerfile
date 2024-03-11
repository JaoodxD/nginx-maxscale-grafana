# Use Node.js 20 as base image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Expose port 3001
EXPOSE 3001

# Set environment variables
ENV HOST=0.0.0.0
ENV PORT=3001

# Command to run the application
CMD ["node", "index.js"]
