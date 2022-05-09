const fs = require('fs');
const { get } = require('http');

// get the json data of the lesson
function getLesson(pathToLesson)
{
    let file = fs.readFileSync("./db/" + pathToLesson);
    let data = JSON.parse(file);
    return data
}

module.exports = {getLesson}