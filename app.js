const http = require('http')
const fs = require('fs')
require("dotenv").config()

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
})

app.listen(process.env.PORT || 3000)

module.exports = app;