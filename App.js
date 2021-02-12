const getAllFilesFromDirectories = require('./modules/getAllFilesFromDirectories');
const separateFilesByDataCreate = require('./modules/separateFilesByDataCreate');
const shuffleArray = require('./modules/shuffleArray');
const countFilesToCopy = require('./modules/countFilesToCopy');
const countOldFilesToCopy = require('./modules/countOldFilesToCopy');
const copyFiles = require('./modules/copyFiles');

const settings = require('./Settings/settings');

const targetDir = settings.targetDirectory;
const maxFilesTargetDirectory = settings.maxFilesTargetDirectory;
const percentageCopyOldTimeFiles = settings.percentageCopyOldTimeFiles

const countedFilesToCopy = countFilesToCopy(targetDir, maxFilesTargetDirectory);

if (countedFilesToCopy === 0) return;

const allFiles = getAllFilesFromDirectories(settings.directoriesSourcePaths);

const {newFiles, oldFiles} = separateFilesByDataCreate(allFiles, settings);

const shuffledNewFiles = shuffleArray(newFiles);
const shuffledOldFiles = shuffleArray(oldFiles);

const totalFilesToCopy_OldFiles = countOldFilesToCopy(countedFilesToCopy, percentageCopyOldTimeFiles);
const totalFilesToCopy_NewFiles = countedFilesToCopy - totalFilesToCopy_OldFiles;

const oldFilesToCopy = shuffledOldFiles.slice(0, totalFilesToCopy_OldFiles );
const newFilesToCopy = shuffledNewFiles.slice(0, totalFilesToCopy_NewFiles );
const allFilesToCopy = oldFilesToCopy.concat(newFilesToCopy);

const countCopied = copyFiles(allFilesToCopy, targetDir);

console.log(`Copied ${countCopied} files`);