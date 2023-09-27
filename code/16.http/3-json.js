const http = require('http');

const courses = [
  {name: 'HTML'},
  {name: 'CSS'},
  {name: 'JvaScript'},
  {name: 'Node'},
  {name: 'Express'}
];

//서버 생성
//서버 리스닝(8080)

const server = http.createServer((request, response)=>{
  const url = request.url;//url체크
  const method = request.method;//method체크

  // console.log(request.url);
  // console.log(request.method);

  if(url === '/courses'){
    if(method === 'GET'){
      //get - 데이터가 쿼리 스트링 형태로 url에 붙어서 간다. ex) http://www.naver.com/login?name=이름&age=30
      //post - 데이터가 body에 붙어서 간다. url에서 데이터를 확인할 수 없다. 보내려는 데이터의 양이 많을 때도 사용한다. ex) url: http://www.naver.com/, body : name=이름&age=30
      //json은 raw데이터
      const strCourses = JSON.stringify(courses);//문자열로 변경해서 보내기
      response
        .writeHead(200, {
          'Content-Length': Buffer.byteLength(strCourses),// 미리 보내려는 데이터의 크기를 알려준다.
          'Content-Type': 'application/json',
          //json객체로 저장해서 전송이 안된다. str으로 문자열로 변경해서 보내야하고 파싱하여 받아야한다.
          //데이터 전송은 string.
        })
        .end(strCourses);

    }else if(method === 'POST'){
      //post 방식으로 요청이 오면 --> JSON 데이터 받기
      const body = [];
      request.on('data', (chunk)=>{ //데이터 받아올 때
        console.log(chunk.toString());
        body.push(chunk);//body에 위에서 받아온 chunk를 넣어주기
      });
      
      request.on('end', ()=>{ //데이터 받기가 끝났을 때
        //body의 데이터를 string타입으로 변경
        const bodyStr = Buffer.concat(body).toString();
        //string문자열을 JSON객체로 파싱
        const newCourse = JSON.parse(bodyStr); //받아온 데이터가 형태는 json이지만 string이므로 변경해준다.
        //courses 배열에 추가
        courses.push(newCourse);//json 변경이 되어 배열에 추가
        //console.log(courses);
        
        //결과 완료 전송
        response.writeHead(201); //writeHead는 스테이터스 코드를 보내줄 수 있음.
        response.end();


      });

    }
  }else{
    response.write('File not Found');
    //response.end();
  }

  
})

server.listen(8080);