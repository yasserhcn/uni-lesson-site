const http = require('http');
const fs = require('fs');
const { parse } = require('path');

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
    {
        // get path
        let path = req.url;
        // call function
        let pagePath = parsePath(path);

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

// parse the path and get the epath to the lesson json file
function parsePath(path)
{
    // read th json file
    let file = fs.readFileSync("./db/lookup.json");
    if(file == null){
        console.error("unable to read lookup file");
        return null
    }

    // parse the json file
    let parsedData = JSON.parse(file);
    console.log(parsedData);

    // get the url paths
    let paths = path.split('/');
    //! remove console logs
    for(let i = 0; i < paths.length; i++)
    {
        console.log(paths[i]);
    }

    //! remove it after done with testing
    let currentPathLoc = 1;
    if(parsedData[paths[currentPathLoc]] == undefined)
    {
        console.log(`path not found "${paths}"`);
    }

    // temporary data that stores the current path
    let data = parsedData
    // loop through all the paths we have
    // starts at 1 cuz there's some idk value at index 0
    for(let pathLoc = 1; pathLoc < paths.length; pathLoc++)
    {
        // if path doesn't exist immediatly
        if(data[paths[pathLoc]] == undefined)
        {
            // check if it's an array
            if(paths.length > 0)
            {
                // loop through the array to find the path 
                for(let i = 0; i < paths.length; i++)
                {
                    // check if current index has data
                    if(data[i][paths[pathLoc]] == undefined)
                    {
                        continue;
                    }else
                    {
                        data = data[i][paths[pathLoc]];
                        break;
                    }
                }
            }else
            {
                // otherwise return nothing
                console.log(`path not found "${paths}\n"`);
            }
            
        }else
        {
            // temporary data = path we are currently in
            data = data[paths[pathLoc]]
            console.log(`path found ${paths[pathLoc]}\n`);
        }
    }
    
    console.log(`data is : ${data}`)
}

// load th json file of the lesson
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