const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'files');
const folderPathCopy = path.join(__dirname, 'files-copy');

function copyDir(folder, folderCopy) {
  fs.readdir(folderCopy, (error, files) => {
    if (files) {
      files.forEach(file => {
        fs.unlink(path.join(folderCopy, file), () => {});
      });
    }
  });
  fs.readdir(folder, (error, files) => {
    files.forEach(file => {
      fs.readFile(path.join(folder, file), 'utf-8', (error, data) => {
        if (error) {
          throw error;
        }
        fs.mkdir(folderCopy, {recursive:true}, () => {
          fs.writeFile(path.join(folderCopy, file), data, (error) => {
            if (error) {
              throw error;
            }
          });
        });
      });
    });
  });
}

copyDir(folderPath, folderPathCopy);

