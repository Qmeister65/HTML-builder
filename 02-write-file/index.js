const path = require('path');
const fs = require('fs');

const file = fs.createWriteStream(path.join(__dirname, './text.txt'));

process.stdout.write('Hey, type some words: \n');
process.stdin.on('data', data => {
  if (data.toString().trim() === 'exit') process.exit();
  file.write(data.toString());
});


process.on('exit', () => process.stdout.write('See ya next time'));
process.on('SIGINT', process.exit);
