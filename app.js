const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.end('welcome to the home page')
    } else {
        res.end('<h1> 404 </h1><a href="/">go back to the home page </a>')
    }
})

server.listen(5000)