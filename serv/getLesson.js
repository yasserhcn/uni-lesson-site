const fs = require('fs');
const { get } = require('http');

// get the json data of the lesson
function getLesson(pathToLesson)
{
    let file = fs.readFileSync("./db/" + pathToLesson);
    let data = JSON.parse(file);
    return data
}

// read the template HTML page
function readTemplate()
{
    let data = fs.readFileSync("./pages/main.html")
    return data.toString();
}

// write the html page to serve to the client
function WritePage(data, htmlPage)
{
    console.log(data["title"]);
    console.log(htmlPage);
}

module.exports = {getLesson, readTemplate, WritePage}