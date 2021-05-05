FROM        node:latest
ENV         NODE_ENV=production
ENV         PORT=5000
COPY        . /src
WORKDIR     /src
RUN         npm install
EXPOSE      5000
COPY . .
RUN tsc
ENTRYPOINT  ["node", "start"]