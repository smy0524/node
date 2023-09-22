const { Console, dir } = require("console");

console.log('logging...');

/*
log level
개발자들간의 커뮤니케이션을 위해 사용한다.
실제 배포시에는 삭제해준다.
*/
console.log('log');     //개발
console.info('info');   //정보, 사용법..
console.warn('warn');   //경고
console.error('error'); //에러

console.clear(); //로그 삭제

//assert
console.assert(2 === 2, '동일함'); //조건식이 true이면 출력 X
console.assert(2 === 3, '동일하지 않음'); //false인 경우만 출력됨
//Assertion failed: 동일하지 않음

//print object
const student = {name:'홍길동', age:20, color:{default: 'red'}}
console.log(student); //객체를 그대로 출력
console.table(student); //테이블 형태로 객체 출력
console.dir(student, {showHidden:true, color: false, depth:0});

//time
console.time('for loop');
for(let i=0; i<10; i++){
  i++;
}
console.timeEnd('for loop');
//time과 timeEnd 사이 실행 시간 측정

/*
trace
실행 순서 확인 가능
*/

function f1(){
  f2();
}
function f2(){
  f3();
}
function f3(){
  console.log('function 3!');
  console.trace(); //f1부터 f3까지 넘어온 순서를 보여줌
}

f1();