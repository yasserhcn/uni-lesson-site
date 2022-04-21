const http = require('http');
const fs = require('fs');

const serverInfo = {hostname: 'localhost', port:80};

http.hostname = 'localhost';
http.port = 80;

http.createServer((req, res)=>{
    if(req.url == '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        let page = fs.readFileSync('pages/main.html');
        res.write(page);
        res.end();
    }

    if(req.url == '/main-style.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        let style = fs.readFileSync('pages/main-style.css');
        res.write(style);
        res.end();
    }

    console.log(req.url);
    
}).listen(80)