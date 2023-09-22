const process = require('process');

console.log(process.execPath);

console.log(process.version);
console.log(process.pid);//프로세스 아이디
console.log(process.ppid);//프로세스 부모의 아이디
console.log(process.platform);
console.log(process.env);//모든 환경변수
console.log(process.uptime());
console.log(process.cwd());//현재경로출력
console.log(process.cpuUsage());

//setTimeout(콜백함수, 3000); --> non-blocking
//3초 후에 'setTimeout' 출력

global.setTimeout(()=>{ //global에 들어감. process global로 실행
  console.log('setTimeout');
}, 3000);

//nextTick(콜백함수); --> non-bloking 비동기식 중 가장 처리 순위가 높아 제일 먼저 실행이 된다.
process.nextTick(() => {
  console.log('nextTick');
});