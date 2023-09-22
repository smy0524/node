const fs = require('fs').promises; //promises안까지. promises만 사용할 때. promises를 주지 않으면 다른 것도 사용 가능하지만 fs.promises로 이용.
const os = require('os')

//text.txt 파일을 읽어 콘솔에 출력
fs.readFile('./test.txt','utf-8') //인코딩해줘야 한다.
.then((data)=>{console.log(data)})
.catch(console.error);

//text.txt 파일에 문자열 덮어쓰기
//promise므로 read, write 다 비동기식이지만 writeFile이 우선순위가 높으므로 순서가 밑이어도 먼저 실행된다.
// fs.writeFile('./test.txt','hello javascript coders') //fs.writeFile('파일명','데이터','필요시 인코딩')
// .then(console.log('-- write complete --'))
// .catch(console.error);


//text.txt 파일에 데이터 추가
fs.appendFile('./test.txt','hello javascript coders'+os.EOL)//맥까지 호환
//fs.appendFile('./test.txt','hello javascript coders\r\n') //end of line = \r\n    //\r\n은 윈도우만. 
.then(console.log('-- append complete --'))
.catch(console.error);

//text.txt 파일을 복사하기
// fs.copyFile('./test.txt','./test-copy.txt')
// //.then() 리턴하는 값이 없으므로 생략
// .catch(console.error);

//'sub-folder' 생성
// fs.mkdir('sub-folder')
// .then(console.log)
// .catch(console.error);
