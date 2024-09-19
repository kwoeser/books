# Backend Dockerfile
FROM node:16-alpine

WORKDIR C:\Users\karma\OneDrive\Desktop\books\backend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy backend code
COPY . .

# Expose backend port (assuming it's running on port 5000)
EXPOSE 3333

# Start backend
CMD ["npm", "start"]
