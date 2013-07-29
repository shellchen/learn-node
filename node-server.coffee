httpstreams = (request, response) ->
  response.writeHead 200
  request.pipe response
http = require "http"
server = http.createServer httpstreams
server.listen 8080