const fs = require('fs');
const { get } = require('http');
const { parse } = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

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
    // console.log(data["title"]);
    // console.log(htmlPage);

    let amountOfChapters = data["chapters"].length;
    console.log(amountOfChapters);

    let dom = new JSDOM(htmlPage);
    let page = dom.window.document
    
    page.getElementsByClassName("chap1")[0].innerHTML = "";
    for(let i = 0; i < amountOfChapters; i++)
    {
        // set the chapter title
        let chapterHtml = "<div class = \"chap" + (i+1) + "> ";
        chapterHtml += "<h1> " + data["chapters"][i]["chapter-title"] + "</h1>\n";

        // set the parts of the chapter
        let amountOfParts = data["chapters"][i]["chapter-parts"].length;
        for(let j = 0; j < amountOfParts; j++)
        {
            console.log("j = " + j);
            console.log(" data : " + data["chapters"][i]["chapter-parts"][j]["part-title"]);
            chapterHtml += "<a href = \"#\" >" + data["chapters"][i]["chapter-parts"][j]["part-title"] + "</a>\n";
        }

        chapterHtml += "</div>"
        console.log(chapterHtml);
        page.getElementsByClassName("side-menu-bar")[i].innerHTML += chapterHtml;
        
    }

    page.getElementsByClassName("chap1")[0].innerHTML += `<h1> ${data["chapters"][0]["chapter-title"]} </h1>`

    // TODO: insert the name of each chapter to its own position
    // TODO: insert the name of subchapters and make them links
    return dom.serialize();
}

module.exports = {getLesson, readTemplate, WritePage}