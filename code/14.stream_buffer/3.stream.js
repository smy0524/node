const { count, Console } = require('console');
const fs = require('fs');

//파일을 읽어오는 방법 --> Stream
//createReadStream 사용하면 자동으로 실행이 된다. setTimeout -> stream.close(); 으로 멈춰줘야한다.
//파일까지 다리를 놓아주는 역할

const readStream = fs.createReadStream('./file.txt', {highWaterMark:64,}); //너무 많이 할당하면 다른 이벤트 처리에 어려움이 있으므로 적당히.
const buf = []; //buf는 배열객체
//highWaterMark는 바이트를 지정해준다.
//file.txt까지 64kb씩({}가 비어 있으므로 기본으로) 다리를 놓아준다.
//객체 형태로 여러가지가 들어갈 수 있으므로 {}로 싸준 형태
//체이닝이 가능하다.
//버퍼가 불러오는 데이터는 배열형태
//충돌방지를 위해 Stream은 데이터를 단방향으로 받는다. 읽어올 때와 내보낼 때의 길이 다르다.

readStream.on('data', (chunk) => { //이 'data'는 문자가 아닌 호출하는 이벤트 타입
  //non-blocking io. io작업이 되면 non-blocking으로 빠진다.
  buf.push(chunk);//버퍼 덩어리
  console.count('data');//배열
  //console.log(chunk.toString()); //chunk는 buffer타입. buffer거나 string.
  //readStream.close();//읽는 작업이 끝나고 그냥 닫을 경우
})
// readStream.on('close', ()=>{//읽는 작업이 끝나고도 추가가 필요한 경우
//   console.log(buf.length);
//   console.log(buf);
//   console.log(buf.join('')); //출력
//   //console.log('-- finished --');
// })

//  //readStream이 닫히거나 buf가 참조하는 모든 객체가 가비지 컬렉터에 의해 정리되는 경우 가비지 컬렉터 실행


//js 엔진 밖은 모두 외부.