const path = require('path');
const fs = require('fs');

const stylesPath = path.join(__dirname, 'styles');
const projectPath = path.join(__dirname, 'project-dist');

function mergeStyles(styles, project) {
  const result = fs.createWriteStream(path.join(project, 'bundle.css'));
  fs.readdir(styles, (error, files) => {
    for (let file of files) {
      if (file.slice(file.lastIndexOf('.')) === '.css') {
        fs.createReadStream(path.join(styles, file), 'utf-8').pipe(result);
      }
    }
  });
}

mergeStyles(stylesPath, projectPath);
