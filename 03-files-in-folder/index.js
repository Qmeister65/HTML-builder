const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, 'secret-folder');

function filesInFolder(currentPath) {
  fs.readdir(currentPath, {withFileTypes: true}, (err, files) => {
    files.forEach(file => {
      if (err) {
        console.log(err.message);
      } else {
        if (file.isFile()) {
          fs.stat(path.join(currentPath, file.name), (error, stat) => {
            if (error) {
              console.log(error.message);
            } else {
              console.log(`${file.name.split('.')[0]} - ${path.extname(path.join(currentPath, file.name))} - ${(stat.size/1024).toString().match(/^\d+(?:\.\d{0,2})?/)} kB`);
            }
          });
        }
      }
    });
  });
}

filesInFolder(currentPath);
