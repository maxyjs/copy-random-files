const fs = require('fs');

function sortFilesByDataCreate(files) {
    const filesSorted = files.sort(function(a, b) {

        return fs.statSync(a).mtime.getTime() -
            fs.statSync(b).mtime.getTime();
    });

    return filesSorted;
}

function cutOldFiles(files, settings) {
    const quantity = files.length;
    const percent = settings.percentageOldTimeFiles;
    const oldFilesCount = Math.floor(quantity * percent / 100);
    return files.splice(0, oldFilesCount);
}

function separateFilesByDataCreate(files, settings) {
    const filesSorted = sortFilesByDataCreate(files);
    const oldFiles = cutOldFiles(filesSorted, settings);
    return {
        newFiles: files,
        oldFiles: oldFiles
    };
};

module.exports = separateFilesByDataCreate;