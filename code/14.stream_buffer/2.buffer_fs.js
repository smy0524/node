const fs = require('fs');
//const fsp = require('fs').promises; 둘 다 사용해야 할 때
const process = require('process');

//파일 읽기 전, 후 => 메모리 사용량 체크. => 콜백함수
console.log(process.memoryUsage().rss);
fs.readFile('./file.txt', (err,data)=>{
  //(_,data) -> (data) 로만 적으면 에러를 받아오는 자리에 위치하게 되므로 _로 자리를 채워줌
  //err, data (버퍼데이터 이름) 에러체크와 버퍼가 필요 없으면 생략가능
  //js 에서 처리하려면 js내부에 있어야 하는데, txt는 밖에 있으므로 내부적으로 가져와서 버퍼에 넣어준다.
  
  //읽은 데이터를 file2.txt 파일에 저장
  fs.writeFile('./file2.txt', data, ()=>{ //data를 받아서 저장
    console.log(process.memoryUsage().rss); //입력이 완료되면 사용량 체크
  })
  
  //console.log('-- finished --');
  //console.log(data.toString());
});


//프로미스 사용 시
//파일 읽기 전, 후 => 메모리 사용량 체크 => 프로미스
console.log(process.memoryUsage().rss);
//fsp.readFile() 상단 추가시 사용
fs.promises.readFile('./file.txt')
  .then((data) => {//콜백으로 제공되는 data는 임시로 제공되므로 안에서 작업이 끝나면 제거된다.
    //파일 저장 --> file3.txt
    fs.promises.writeFile('./file3.txt', data)
    .then(console.log(process.memoryUsage().rss))
    .catch(console.error)
  })
  .catch(console.error);