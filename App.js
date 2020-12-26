const getAllFilesFromDirectories = require('./getAllFilesFromDirectories');
const separateFilesByDataCreate = require('./separateFilesByDataCreate');
const shuffleArray = require('./shuffleArray');
const calculateNumberFilesToCopy = require('./calculateNumberFilesToCopy');
const calculateOldFilesToCopy = require('./calculateOldFilesToCopy');
const copyFiles = require('./copyFiles');

const settings = require('./Settings/settings');

const targetDir = settings.targetDirectory;
const maxFilesTargetDirectory = settings.maxFilesTargetDirectory;
const percentageCopyOldTimeFiles = settings.percentageCopyOldTimeFiles

const countedFilesToCopy = calculateNumberFilesToCopy(targetDir, maxFilesTargetDirectory);

if (countedFilesToCopy === 0) return;

const directoriesSourcePaths = settings.directoriesSourcePaths;

const allFiles = getAllFilesFromDirectories(directoriesSourcePaths);

const {newFiles, oldFiles} = separateFilesByDataCreate(allFiles);

const shuffledNewFiles = shuffleArray(newFiles);
const shuffledOldFiles = shuffleArray(oldFiles);

const totalFilesToCopy_OldFiles = calculateOldFilesToCopy(countedFilesToCopy, percentageCopyOldTimeFiles);
const totalFilesToCopy_NewFiles = countedFilesToCopy - totalFilesToCopy_OldFiles;

const oldFilesToCopy = shuffledOldFiles.slice(0, totalFilesToCopy_OldFiles );
const newFilesToCopy = shuffledNewFiles.slice(0, totalFilesToCopy_NewFiles );
const allFilesToCopy = oldFilesToCopy.concat(newFilesToCopy);

copyFiles(allFilesToCopy, targetDir);





