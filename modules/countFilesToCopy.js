const fs = require('fs');

function checkExistDirectory(dirPath) {

       const exist = fs.existsSync(dirPath);
        if ( exist ) {
            return true;
        } else {
            console.warn(`Target directory "${dirPath}" not found!`);
            return false;
        }
}

function targetDirCountFiles(dirPath) {
    const isExistDir = checkExistDirectory(dirPath);
    if (isExistDir) {
        const files = fs.readdirSync(dirPath);
        const totalFiles = files.length ? files.length : 0;
        return totalFiles;
    }
}

function countFilesToCopy(targetDir, maxFilesTargetDirectory) {
    const totalFiles = targetDirCountFiles(targetDir);
    const countedFilesToCopy = maxFilesTargetDirectory > totalFiles ? maxFilesTargetDirectory - totalFiles : 0;
    return countedFilesToCopy;
}

module.exports = countFilesToCopy;