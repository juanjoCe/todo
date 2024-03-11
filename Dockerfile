# Use the official MongoDB image
FROM mongo

# Set the working directory
WORKDIR /data/db

# Create a volume for MongoDB data
VOLUME /data/db

# Set environment variables for MongoDB initialization
ENV MONGODB_INITDB_ROOT_USERNAME=username
ENV MONGODB_INITDB_ROOT_PASSWORD=password

# Uncomment the following lines to access MongoDB locally
# EXPOSE 27017

# Specify the network
# Replace 'network-backend' with your actual network name if needed
# NETWORK network-backend

# The MongoDB container itself doesn't need an entry point, as it's managed by the MongoDB image