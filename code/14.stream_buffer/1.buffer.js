const { log } = require('console');
const fs = require('fs');

const buf = Buffer.from('Hi~'); //Hi
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf[2]);
console.log(buf.toString('utf-8')); //문자열 출력. 기본_표준 인코딩 utf-8. utf-8은 생략이 가능하다.
//출력하는 방식에 따라 10진수와 16진수로 보여진다

const buf2 = Buffer.alloc(buf.length); //사이즈를 지정해주면 값이 변경 될 때 마다 바꿔줘야 하기 때문에 함수를 사용한다.
console.log(buf2.length);
console.log(buf2);
buf.copy(buf2); //buf의 내용을 복사하여 buf2에 저장
console.log(buf2);

const newBuf = Buffer.concat([buf, buf2]);
//list가 들어가므로 여러가지 버퍼를 넣을 수 있고 그 버퍼로 새로운 버퍼를 만든다.
console.log(newBuf.toString());

//버퍼는 임시저장소