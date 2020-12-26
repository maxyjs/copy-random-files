const fs = require('fs');

//fs.copyFileSync('source.txt', 'destination.txt');

function copyFile(file, targetDir){
    const fileName = file.split("\\").pop();
    fs.copyFileSync(file, `${targetDir}\\${fileName}`);
}

module.exports = function copyFiles(files, targetDir){
    files.forEach(file => copyFile(file, targetDir));
};