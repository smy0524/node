const { error, log } = require('console');
const fs = require('fs');

//fs에서는 3가지 방식으로 제공

//synchoronous : renameSynk(old, new)
//동기식이므로 우선 파일 이름이 변경 되기 전 다른 것은 실행되지 않아 시간이 오래걸리는 작업이라면 끝나기 전까지는 다음이 처리되지 않으므로 다른 방식을 사용하는 것을 권장함
// try {
//   fs.renameSync('./test.txt','./test-new.txt');
//   console.log('-- rename complete --');
// } catch (error) {
//   console.log('-- error --');
//   console.log(error);
// }
// console.log('--- test ---');


//callback : rename(old, new, callback) //코드가 길어지면 콜백 안에 콜백 등 코드가 지저분해지기 때문에 promise를 권장
// fs.rename('./test.txt',
//           './test-new.txt',
//           (error)=>{ //null 주소값이 없는 객체
//             console.log(error);
//           });


//promise: rename(old, new) //권장방법. 가독성도 좋고 try catch 사용하지 않아도 됨
fs.promises
.rename('./test.txt','./test-new.txt')//이름변경
//.then(()=>{console.log('-- rename complete --');}) //한줄이고log만 실행하므로 생략가능
.then(()=>console.log('-- rename complete --'))
//.catch((error) => console.log(error)) // 매개변수로 넘어가는 데이터가 같을 때 생략가능
.catch(console.error)
.finally(()=>console.log('-- terminate --'))