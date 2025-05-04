FROM nginx:alpine

# Move cache dir to a writable place
RUN mkdir -p /tmp/nginx/client_temp && \
    chmod -R 777 /tmp/nginx

# Change nginx.conf to use new temp path
COPY nginx.conf /etc/nginx/nginx.conf

COPY . /usr/share/nginx/html
RUN chmod -R 755 /usr/share/nginx/html
