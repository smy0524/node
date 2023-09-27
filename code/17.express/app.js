const express =  require('express');
const server = express(); //서버생성

const courses = [
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'JvaScript'},
  {name: 'Node'},
  {name: 'Express'}
];

server.get('/', (req, res)=>{//루트접속
  //console.log(req.headers);
  res.send('hello world');
});

server.get('/course', (req, res)=>{
  res.setHeader('Content-type', 'application/json');
  res.status(200);
  res.json(courses); //내부에서 string을 변환하는 등의 내부작업을 보여주지 않아도 되는 객체지향의 캡슐형 구조를 가지고 있음.
});

server.post('/course', (req, res)=>{
  const body = [];
  req
  .on('data', (chunk)=>{
    console.log(chunk);
    body.push(chunk);
  })
  .on('end',(()=>{
    courses.push(JSON.parse(Buffer.concat(body).toString()));
    res.status(201).end();
  }));
});

// server.post('/address',(req,res)=>{

// });//이 하나를 미들 웨어라고 한다.
//미들웨어는 체이닝이 가능하다.
//express는 미들웨어로 구성되어있다

server.listen(3300);
