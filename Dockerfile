# Set the working directory in the container
WORKDIR /root/rosary-api

# Expose the port your application will run on
EXPOSE 8084

# Define the command to start your Node.js application
CMD ["bun ."]