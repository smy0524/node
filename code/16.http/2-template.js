const fs = require('fs');
const http = require('http');
const ejs = require('ejs');

const name = 'hong';
let courses = [
  {'name' : 'HTML'},
  {'name' : 'Node.js'},
  {'name' : 'CSS'},
  {'name' : 'JavaScript'}
];
let scoreList = [
  {'name' : 'HTML', gread: 'A'},
  {'name' : 'Node.js', gread: 'B'},
  {'name' : 'CSS', gread: 'C'},
  {'name' : 'JavaScript', gread: 'D'}
];

//서버 생성 : port-3000
console.log('-- server start --');
const server = http.createServer((request, response)=>{
  console.log('incoming...');
  //console.log(request.headers);

  //response.write('welcome');
  //response.end();

  
  //1. 클라이언트 요청 URL 받아옴
  const url = request.url;

  //2. 클라이언트 전송타입
  response.setHeader('Content-Type', 'text/html'); //HTML

  //3. 패스 체크 : / --> index.ejs // url로 /를 받아준다
  if (url === '/'){
    //4. ejs.renderFile(매개변수) <= 프로미스 타입 처리
    ejs.renderFile('./template/index.ejs', {name})
    .then((data)=>{
      console.log(data);
      response.end(data)})
    .catch(console.error);
    
  }else if(url === '/courses'){
    ejs.renderFile('./template/courses.ejs',{courses})
    .then((data)=>{response.end(data)})
    .catch(console.error);

  }else if(url === '/score'){
    ejs.renderFile('./template/score.ejs',{score})
    .then((data)=>{response.end(data)})
    .catch(console.error);

  }else{
    //패스가 다르면 --> FIle Not Found~ Hong!
    ejs.renderFile('./template/error.ejs',{name})
    .then((data)=>{response.end(data)})
    .catch(console.error);
  } 

});

server.listen(3000);