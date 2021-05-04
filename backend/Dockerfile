FROM        node:latest
ENV         NODE_ENV=production
ENV         PORT=5000
COPY        . /src
WORKDIR     /src
RUN         npm install
RUN         npm run build
EXPOSE      5000
ENTRYPOINT  ["npm", "start"]