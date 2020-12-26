module.exports = function calculateOldFilesToCopy(countedFilesToCopy, percentageCopyOldTimeFiles){
    const count = Math.floor(countedFilesToCopy * percentageCopyOldTimeFiles / 100);
    return count;
}

