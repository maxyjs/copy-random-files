# Перемещение файлов в целевую папку по заданной логике

Node.js приложение. Написано в 2019 году для себя.  

Мне необходимо было иметь на смартфоне папку с музыкальными треками регулярно обновляющуюся по такой логике: определенный процент старых треков, определенный процент (большинство) новых треков. Для этого я написал это приложение. Приложение запускается по расписанию в "Менеджере заданий" и обновляет треки в папке Google Drive, Google Drive синхронизирует папку с папкой на смартфоне.

## Настройки:

settings.json

```
{
  "directoriesSourcePaths": [""], // Папки источники треков
  "targetDirectory": "", // Целевая папка
  "maxFilesTargetDirectory": 200, // Максимальное количество треков в целевой папке
  "percentageOldTimeFiles": 40, // Процент треков, которые будут считаться "старыми"
  "percentageCopyOldTimeFiles": 20 // Необходимый процент "старых" треков в целевой папке
}
```