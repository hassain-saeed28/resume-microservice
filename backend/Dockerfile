FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Expose API port
EXPOSE 3000

# Start application
CMD ["npm", "start"]