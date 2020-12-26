const fs = require('fs');
const settings = require('C:\\WebStormProjects\\MyTestProjects\\copy-random-files\\Settings\\settings.json');

module.exports = function splitFilesByDataCreate(files){
    const filesSorted = sortFilesByDataCreate(files);
    const oldFiles = cutOldFiles(filesSorted);
    return {
        newFiles: files,
        oldFiles: oldFiles
    };
};

function sortFilesByDataCreate(files){
    const filesSorted = files.sort(function(a, b) {

        return fs.statSync(a).mtime.getTime() -
            fs.statSync(b).mtime.getTime();
    });

    return filesSorted;
}

function cutOldFiles(files){
    const quantity = files.length;
    const percent = settings.percentageOldTimeFiles;
    const oldFilesCount = Math.floor(quantity * percent / 100);
    return files.splice(0, oldFilesCount);
}




