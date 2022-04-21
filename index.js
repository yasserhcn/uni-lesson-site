const http = require('http');
const fs = require('fs');

const serverInfo = {hostname: 'localhost', port:80};

http.hostname = 'localhost';
http.port = 80;

http.createServer((req, res)=>{

    //* main index path
    if(req.url == '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        let page = fs.readFileSync('pages/main.html');
        res.write(page);
        res.end();
    }else
    //* link1 request url
    if(req.url == "/link1"){
        res.writeHead(200, {'content-type' : 'text/html'});
        let page = fs.readFileSync('pages/main.html');
        loadLesson("alg/lesson.json", (err, txt)=>
        {
            console.log(txt);
        });
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

function loadLesson(lessonName, result)
{
    if(typeof(lessonName) != 'string'){
        result(new Error("lessonName is not a string"));
    }else
    {
        console.log("lskqfmlqksfmlqksfmlqksdmfl");
        let file = fs.readFileSync("./db/" + lessonName);
        result(null, String(file));
    }
}