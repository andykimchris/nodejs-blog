const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {


    const num = _.random(0,100)
    console.log(num)
    // console.log(req.url, req.complete, req.headers, req.httpVersion, req.httpVersionMajor, req.rawHeaders, req.method, req.read)
    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        case '/about':
            path += 'about.html'
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })

});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000')
});