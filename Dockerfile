# Dockerfile
FROM node:18-alpine
 
# Set working directory 
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the project files
COPY . .

# Build the app
RUN npm run build && ls -la

# Expose the port (default Nest port is 3000)
EXPOSE 3000

# Run the built app
CMD ["npm", "run", "start:prod"]
