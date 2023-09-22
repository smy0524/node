{ //ex global(전역) 스코프 영역

//num //function의 변수는 글로벌로 선언된 것 처럼 된다.
function hello(num){
  this.num = num; //global에서 1번 라인처럼 전역(글로벌)변수로 들어가는 것 처럼 됨.
  //내부에서만 전역처럼 사용됨
  console.log(num);

  //console.log(this);//여기에서 호출 된 this는 global객체
  //호출하는 부모를 나타냄
}
//console.log(num); 정의 전이므로 오류가 남
hello(100);
console.log(num); //전역으로 선언이 된 상태이므로 값이 찍히게 된다.

class Test {
  constructor(name){
    this.name = name;
    console.log(this); //Test { name: 'hong' }
    //test에 있는 this. 글로벌이 아닌 객체 자기자신을 가리킨다.
  }
}//class에서는 그 안에서 사용되고 끝난다.

const t = new Test('hong');

}