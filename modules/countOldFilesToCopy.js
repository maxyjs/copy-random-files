function countOldFilesToCopy(countedFilesToCopy, percentageCopyOldTimeFiles){
    const count = Math.floor(countedFilesToCopy * percentageCopyOldTimeFiles / 100);
    return count;
}

module.exports = countOldFilesToCopy;

