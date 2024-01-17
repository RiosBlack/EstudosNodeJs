import http from 'http'

const server = http.createServer((req, res) => {
  return res.end('hello word')
})

server.listen(3333)