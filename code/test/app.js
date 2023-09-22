/*
제목 : 사진 폴더 정리 Script 생성
요구사항
  1. 동영상(mp4), 이미지(png) 파일들이 함께 있는 폴더를 각각 동영상과 이미지를 분리하여 관리
  2. 동영상 파일은 video 폴더에, png 파일은 capture 폴더에 각각 이동하여 정리
  
  폴더 생성 -> 파일의 확장자 체크 -> 폴더 이동
  
*/

const process = require('process');
const fs = require('fs');
const path = require('path');

//현재 경로를 workingDir로 설정하여 하위 폴더로 video, capture 폴더 생성
// process.cwd(), path

const workingDir = process.cwd(); //경로확인
const videoDir = path.join(workingDir, 'video'); //만들어질 주소. join 스트링이므로 주소를 만들어 오는 것
const captureDir = path.join(workingDir, 'capture');

// console.log(videoDir);
// console.log(captureDir);

if (!fs.existsSync(videoDir)) fs.mkdirSync(videoDir); //폴더에 폴더가 있는지 확인 후 폴더 생성
if (!fs.existsSync(captureDir)) fs.mkdirSync(captureDir);

//현재 경로의 모든 파일을 읽음
fs.promises.readdir(workingDir)//현재 경로 읽기
.then((files)=>{ //파일 확인
  //console.log(files);
  fileCheck(files);
})
.catch(console.error);

function fileCheck(files){
  files.forEach(file => { //files의 형태가 배열이므로 꺼내올 수 있다.
    //파일 확장자 분리
    if (isVideoFile(file)) { //위의 file을 매개변수로 받아오기
      //video 폴더로 파일을 이동시킴
      move(file, videoDir);
      console.log('video--->' + file);
    }else if(isImageFile(file)){
      //capture 폴더로 파일을 이동시킴
      move(file, captureDir);
      console.log('image--->' + file);
    }
  });
}

//파일 이동
function move(file, targetDir) {
  //파일 이동 경로 만들기
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);

  //파일 이동 --> fs.Promises.rename(oldPath, newPath)
  fs.promises.rename(oldPath, newPath)
  .catch(console.error);
}


//video 파일 여부 체크
function isVideoFile(file){
  const fileObject = path.parse(file); //파일 명을 분리해서 보기
  if(fileObject.ext == '.mp4') return true; //.mp4라면 true
  //console.log(fileObject.ext); //확장자만 가져오기
}

//png 파일 여부 체크
function isImageFile(file){
  const fileObject = path.parse(file);
  if(fileObject.ext == '.png') return true; //.png라면 true
}

