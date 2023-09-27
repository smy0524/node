//1. 주소록(address) 배열 객체 생성
//2. POST 방식으로 이름, 주소를 입력받아 address에 추가
//3. GET 방식으로 주소록(address) 확인
//*postman을 이용해서 테스트 진행해주세요.

const http = require('http');

//1. 주소록 생성
const address = [];

//2. 서버 생성
const server = http.createServer((req, res)=>{
  const url = req.url;
  const method = req.method;

  if(url === '/adress'){ //url이 adress일 때
    if(method === 'GET'){
      if(address.length != 0) {//adress가 0이 아닐 때. 데이터가 있을 때.
        res
        .writeHead(200, {
          'Content-Type' : 'application/json', //미리 준비 된 json을 보내는 것이 아니므로 Content-Length를 주지 않아도 된다
        })
        .end(JSON.stringify(address)); //보내고 종료할 때 json을 json형태를 유지한 string으로 보낸다.

      }else{ //데이터가 없을 때
        res.end('-- no data --');
      }
    }else if(method === 'POST'){
      const body = []; //on의 chunk가 콜백함수이므로 스코프가 on을 벗어날 수 없으므로 body에 넣어 사용한다.
      req
      .on('data',((chunk)=>{
        body.push(chunk);
        console.log(chunk);
      }))
      .on('end',()=>{
        // const bodyStr = Buffer.concat(body).toString();
        // // const jsonStr = JSON.parse(bodyStr);
        // // address.push(jsonStr);
        // address.push(JSON.parse(bodyStr)); //1축약
        // res.writeHead(201).end();

        // const bodyStr = Buffer.concat(body).toString();
        // const jsonStr = JSON.parse(bodyStr); //2축약
        address.push(JSON.parse(Buffer.concat(body).toString()));
        console.log(address);
        res.writeHead(201).end();
      });
    }
  }else{
    res
    .write('page not found')
    .end();//체이닝
  }
});

//3. 9000포트로 리스닝
server.listen(9000);