# backend
`index.js` contains the code responsible for handle get/post requests

`files.json` has a map of the location of each lesson

`main-temp.html` is he template file for lessons, itll be modified by the backend before being sent to the frontend

## <u>lessons</u>
each lesson is stored as a json file, which is loaded and added to the html template file<br>
the general structure of lesson files are as follows:
```json
{
    "title" : "lesson title",
    "chapters" : 
    [
        {
            "chapter-title" : "title",
            "chapter-parts" :
            [
                {
                    "part-title" : "title",
                    "text" : "path/to/file"
                },
                {
                    "part-title" : "title",
                    "text" : "path/to/file"
                }
            ]
        }
    ]
}
```
each subject has his own json file, the subject has multiple chapters with their own titles, those chapters have parts, parts are shown under the chapters in the left window of the page

parts have their own title and the text that contains the explanation/lesson, text is an array that has the title, text, and footer

`text-location` points to the location of the file that contains the text of the lesson, be it a summary or a full lesson

### <u>chapter part file</u>
the array that contains the parts has the following structure
```json
[
    {
        "title" : "title",
        "text" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "footer" : "footer text"
    },
    {
        "title" : "title",
        "text" : "Risus sed vulputate odio ut enim blandit volutpat maecenas volutpat. Id aliquet risus feugiat in. Duis ultricies lacus sed turpis tincidunt id aliquet. Sollicitudin aliquam ultrices sagittis orci. Tristique nulla aliquet enim tortor at auctor urna nunc id. Leo vel fringilla est ullamcorper eget nulla. Sit amet justo donec enim diam. At in tellus integer feugiat scelerisque varius morbi enim. Turpis cursus in hac habitasse platea dictumst quisque. A arcu cursus vitae congue. Arcu cursus vitae congue mauris rhoncus aenean vel elit. Fames ac turpis egestas integer eget aliquet nibh praesent. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor.",
        "footer" : "footer text"
    }
]
```