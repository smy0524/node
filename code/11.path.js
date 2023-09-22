const { log } = require('console');
const path = require('path');

//윈도우 : c:\dev\node\code\test.js'
//맥, 리눅스 : /users/test/

//path.dirname + '/image'(X)

console.log(__dirname); //global에 있는 디렉토리
console.log(__filename); //global에 있는 파일

console.log(path.sep); //경로구분자
console.log(path.delimiter); //환경변수 구분자

//basename - 현재 파일 기준
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//dirname
console.log(path.dirname(__dirname));

//extname
console.log(path.extname(__filename));

//parse
const parsed = path.parse(__filename); //오브젝트형태로 출력
console.log(parsed);
parsed.root;
parsed.name;

const str = path.format(parsed); //string 형태로 변환
console.log(str);

//noralize
console.log(path.normalize('./folder//////sub'));

//join
//console.log(__dirname + '/' + 'image'); // OS에 따라 /가 다르게 출력될 수 있으므로 사용하는것을 지양한다.
console.log(__dirname + path.sep + 'image'); //OS맞춰 /나 \를 알아서 넣어준다.
console.log(path.join(__dirname, 'image', 'test'));