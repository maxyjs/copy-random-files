const fs = require('fs');

function copyFile(file, targetDir) {
    const fileName = file.split("\\").pop();
    fs.copyFileSync(file, `${targetDir}\\${fileName}`);
}

function copyFiles(files, targetDir) {
    files.forEach(file => copyFile(file, targetDir));
    return files.length
};

module.exports = copyFiles;