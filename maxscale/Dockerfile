# Use the MariaDB MaxScale base image
FROM mariadb/maxscale:latest

# Copy the custom MaxScale configuration file into the container
COPY maxscale.cnf /etc/maxscale.cnf.d/my-maxscale.cnf

# Start MaxScale
CMD ["maxscale", "-d"]
