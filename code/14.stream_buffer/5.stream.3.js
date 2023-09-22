//readStream을 이용하여 file.txt파일의 내용을 16바이트씩 읽어서
//file-stream.txt 파일 안에 writeStream을 이용하여 저장해주세요.

const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {highWaterMark:16,}); //읽음
const writeStream = fs.createWriteStream('./file-stream.txt'); //씀

readStream.on('data', (chunk)=>{ //데이터를 chunk로 불러와서
  writeStream.write(/*console.count('data') + ' ' + */chunk); //적어준다
})
.on('close', ()=>{
  console.log('-- finish --');
});
