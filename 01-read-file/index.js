const path = require('path');
const fs = require('fs');

fs.createReadStream(path.join(__dirname, './text.txt')).on('data', data => console.log(data.toString()));

