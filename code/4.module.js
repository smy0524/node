const counter = require('./4.counter.js');
//require 는 모듈화해서 사용하는 곳에도 쓰지만 빌트인 객체를 불러와 사용할때도 쓴다.
counter.increase();
counter.increase();
counter.increase();

console.log(counter.getCount());


