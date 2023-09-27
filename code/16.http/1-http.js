const http = require('http');
const fs = require('fs');

//서버 생성 : createServer()
console.log('Server start');
const server = http.createServer((req, res)=>{ //Response, Request 작업을 해줘야 한다. req, res로 축약가능
  console.log('incoming...');
  console.log(req.headers); //서버에 접속한 브라우저 헤더의 정보 확인. 정보가 많으므로 객체 형태로 넘어온다.
  console.log(req.httpVersion); // 현재 http 버전
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  console.log(`url--> ${url}`);

  //http - tcp ip의 자식. 서버에서 응답이 올 때 까지 대기

  //응답생성 - url의 path별로 응답 처리
  //res.write('Welcome');
  res.setHeader('Content-Type', 'text/html'); //지금부터 보내는 문서를 html로
  if (url === '/'){
    // res.write('<html>');
    // res.write('<head><title>Node Server Test</title><heade>');
    // res.write('<body>');
    // res.write('<h1>Welcome</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.end();
    fs.createReadStream('./html/index.html')/* 자동으로 버퍼 생성 */.pipe(res);
    /* pipe는 chunk를 메모리에 저장하지 않고 클라이언트에게 바로 보내 이용할 수 있게 한다. res로 바로 이어보낸다 */
  }else if (url === '/courses'){
    fs.createReadStream('./html/courses.html').pipe(res);
  } else {
    fs.createReadStream('./html/error.html').pipe(res);
  }
});

server.listen(8080); //listen작업 //포트 번호 부여

/* 
내 pc
http://localhost:8080
127.0.01
네트워크 사설 ip


오라클 관리 내부서버 등의 포트가 8080

*/



