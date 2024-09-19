# Frontend Dockerfile
FROM node:16-alpine

WORKDIR C:\Users\karma\OneDrive\Desktop\books\client

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy frontend code
COPY . .

# Build the frontend
RUN npm run build

# Install a simple HTTP server to serve the built React app
RUN npm install -g serve

# Expose frontend port (assuming it's running on port 3000)
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]
# CMD ["npm", "start"] # This line will not be executed because the previous CMD will override it