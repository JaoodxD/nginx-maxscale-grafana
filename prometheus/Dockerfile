# Use a base image for Prometheus
FROM prom/prometheus:latest

# Copy Prometheus configuration file into the image
COPY config/prometheus.yaml /etc/prometheus/prometheus.yaml

# Expose port 9090
EXPOSE 9090

# Set the command to start Prometheus with the provided configuration file
CMD ["--config.file=/etc/prometheus/prometheus.yaml"]
