// parse the path and get the path to the lesson json file
function parsePath(path)
{
    // read the json file
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

module.exports = {parsePath}