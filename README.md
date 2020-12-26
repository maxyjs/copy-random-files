# Перемещение файлов в целевую папку по заданной логике

## Настройки:

settings.json

```
{
  "directoriesSourcePaths": [""], // Папки источники файлов
  "targetDirectory": "", // Целевая папка
  "maxFilesTargetDirectory": 200, // Максимальное количество файлов в целевой папке
  "percentageOldTimeFiles": 40, // Процент файлов, которые будут считаться "старыми"
  "percentageCopyOldTimeFiles": 20 // Необходимый процент "старых" файлов в целевой папке
}
```