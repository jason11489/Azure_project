

import path from path;
import fs from fs;

const FilePath = "/Users/kimsw/tiger/Azure_project/front/src/image";

function getimage() {
    
    try {
        fs.readdir(FilePath, function (error, filelist) {
            console.log("front filelist = ", filelist);
            return filelist;
            
        })
    } catch(error) {
        if (err.code == 'ENOENT') {
            console.log("error for search img file");
        }
    }



}


export default getimage