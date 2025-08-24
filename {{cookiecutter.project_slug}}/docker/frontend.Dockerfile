# Use Node.js LTS
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the frontend code
COPY . .

# Expose port
EXPOSE 3000

# Run React dev server
CMD ["npm", "start"]

