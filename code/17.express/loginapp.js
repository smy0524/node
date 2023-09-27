const express = require('express');
const path = require('path');
const app = express();
let memberList = []; //값이 추가 되므로 let. 회원가입에 입력한 정보 입력 됨.


//path root '/' 이면 welcome 메세지 전송

app.get('/', (req, res)=>{ //get으로 루트로 들어오면
  //console.log('welcome!');
  //res.send('welcome'); //welcome 메세지 출력
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res)=>{
  //express서버 경로에서 보내주게 되어 express서버의 경로를 찾아야 하고 global이 아닌 폴더에 설치되었기 때문에 단순히 파일 이름만으로는 경로를 찾지 못해 오류가 나므로, 현재 요청할 파일이 있는 경로를 찾아준다.
  //console.log(path.join(__dirname, 'login.html'));
  //console.log(path.join(process.cwd(), 'login.html'));
  //둘 다 사용 가능하지만 현재 경로명만 필요하면 __dirname은 글로벌이므로 따로 모듈을 호출할 필요가 없으므로 dir을 사용해준다.
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/join', (req, res)=>{
  res.sendFile(path.join(__dirname, 'join.html'));
});

//미들웨어는 순차를 지켜야 한다.
//브라우저마다 방식이 다르므로 body에서 넘어오는 에디터를 객체화, 인코딩 작업을 해주어야함.
//use는 요청받지 않아도 무조건 실행함. 데이터를 받기 전에 객체화, 인코딩을 실행해야 아래의 post에서 작동이 가능하므로 post 위에 적어준다.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res)=>{
  const {id, pass} = req.body;
  // const id = req.body.id;
  // const pass = req.body.pass;
  let result = 0;

  //const id = req.body.id(form에서 넘어온 id. name이다.);
  //서버로 submit되어서 넘어오는 값은 무조건 form의 name값이다.
  //id값은 클라이언트 측과 관련이 있고, 서버와 연결되는 값은 name. 다른 언어에서도 같다.

  //memberList에서 id, password 일치하면 --> 1, 일치하지 않으면 0
  //회원가입 배열에서 일치자를 찾으면 멈추고 나와야한다.
  for(let i = 0; i<memberList.length; i++){
    let member = memberList[i]; //for가 끝나면 사라진다.
    if(id === member.id && pass === member.pass){
      result = 1;
      i = memberList.length; //break; 사용을 지양한다.
    }
  }; //db에서 하는 일


  if (result === 1){
    //성공 --> index.html 이동
    //res.send('로그인 성공');
    res.redirect('/');
  }else{
    //실패 --> loginFail.html
    //res.send('로그인 실패');
    res.sendFile(path.join(__dirname, 'loginFail.html'));
    //에러페이지 등 어디에서나 불러서 띄워줘야 하는 페이지의 경우 path경로를 하나 만들어주어 이용한다.
    //res.redirect('/error');
  }
});


//회원가입
app.post('/join',(req, res)=>{
  const {name, id, pass, address} = req.body; //body를 통해서 넘어옴
  memberList.push({name, id, pass, address}); //memberList 배열로 넣어준다. 이 스코프 안에 넣어두면 post마다 새 배열이 생기므로 최상단에 글로벌로 준다.
  console.log(memberList);
  res.redirect('/');
});



app.get('/error',(req, res)=>{ // /error는 클라이언트가 아닌 내부의 미들웨어가 호출.
  //respones redirect 경로
  res.sendFile(path.join(__dirname, 'loginFail.html'));
});

app.listen(8080);