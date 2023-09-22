console.log('code 1');

setTimeout(()=>{ //non-blocking이므로 0초여도 스택이 아닌 테스크에
  console.log('setTimeout');
}, 0);

console.log('code 2');

setImmediate(()=>{ //즉시 실행
  console.log('setImmediate');
});

console.log('code 3');

process.nextTick(() => {
  console.log('nextTick');
});