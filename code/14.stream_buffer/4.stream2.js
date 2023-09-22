const fs = require('fs');
const writeStream = fs.createWriteStream('./file4.txt');
writeStream.write('hello~\r\n');
writeStream.write('hello~\r\n');

writeStream.end();