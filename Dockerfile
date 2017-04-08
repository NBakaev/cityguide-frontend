FROM nginx

ADD deploy/nginx /etc/
ADD build/ /home/nginx/cityguide.nbakaev.com/

EXPOSE 8080

# CMD ["nginx", "-g", "daemon off;"]