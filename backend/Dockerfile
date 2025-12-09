# FROM node:18-alpine
# WORKDIR /usr/src/app
# COPY backend/package.json ./backend/package.json
# WORKDIR /usr/src/app/backend
# RUN npm ci --only=production
# WORKDIR /usr/src/app
# COPY . .
# EXPOSE 3000
# CMD [""node"", ""backend/index.js""]

# Use official Node runtime
FROM node:18-alpine

# Set work directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy backend source code
COPY . .

# Expose port (Render sets PORT dynamically)
EXPOSE 3000

# Start the Node server
CMD ["node", "index.js"]
