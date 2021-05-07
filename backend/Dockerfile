FROM        node:latest
ENV         PORT=5000
COPY        . /src
WORKDIR     /src
RUN         npm install
EXPOSE      5000
COPY . .
RUN         npm run build
ENTRYPOINT  ["node", "dist/main"]