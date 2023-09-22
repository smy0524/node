//const g = require('global');
//1초에 정수를 하나씩 증가하여 출력하는 함수 생성
let number = 1;
const interval = setInterval(()=>{
  console.log(number++);
},1000);

//6초 후에 출력을 종료
setTimeout(()=>{
  console.log('-- Timeout --');
  clearInterval(interval);
}, 6000);