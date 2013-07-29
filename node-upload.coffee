fs = require "fs"
http = require "http"
httpStreams = (request, response) ->
  newFile = fs.createWriteStream "readme_copy.md"
  request.pipe newFile
  endStream = ->
    response.end "uploaded"
  request.on('end', endStream)

server = http.createServer httpStreams
server.listen 8080