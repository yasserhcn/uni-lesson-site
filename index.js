const http = require('http');
const fs = require('fs');
const { parse } = require('path');
const pathParse = require('./serv/pathParse.js');
const lesson = require('./serv/getLesson.js')

const serverInfo = {hostname: 'localhost', port:80};

http.hostname = serverInfo.hostname;
http.port = serverInfo.port;

http.createServer((req, res)=>{

    //* main index path
    if(req.url == '/'){
        res.writeHead(200, {'content-type' : 'text/html'});
        let page = fs.readFileSync('pages/main.html');
        res.write(page);
        res.end();
    }else
    {
        // get path
        let path = req.url;
        // call function
        let pagePath = pathParse.parsePath(path);
        console.log(lesson.getLesson(pagePath));
        // change html page to have values of the lesson

        // return the page

    }

    if(req.url == '/main-style.css'){
        res.writeHead(200, {'content-type' : 'text/css'})
        let style = fs.readFileSync('pages/main-style.css');
        res.write(style);
        res.end();
    }
    
}).listen(80)

// load the json file of the lesson
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