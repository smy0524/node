/* 
파일명 : 2-https.js

http://127.0.0.1:9000
192.168.50.218 //IPv4
주소로 동작하는 노드 서버를 생성하시고, 실행해주세요.

2. 접속한 클라이언트의 URL에 따라 결과를 전송해주세요.
/         --> ./test/main.html
/courese  --> ./test/courese/courese.html
/login    --> ./test/login.html
/기타주소 --> ./test/error.html

*/

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
  console.log('start');
  const url = req.url;
  
  res.setHeader('Content-Type', 'text/html');
  
  if(url === '/'){
    console.log('1');
    fs.createReadStream('./test/index.html').pipe(res);
  } else if (url === '/login'){
    fs.createReadStream('./test/login/login.html').pipe(res);
  } else if (url=== '/courese'){
    fs.createReadStream('./test/courese/courese.html').pipe(res);
  } else {
    fs.createReadStream('./test/error.html').pipe(res);
  }
});


server.listen(9000);