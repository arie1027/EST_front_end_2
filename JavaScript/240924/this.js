// // this!!!! 망할 this!!!!
// // 1. 전역 범위!
// console.log(this);

// //this 호출범위의 부모를 따라간다고 생각

// //2. 함수 내부에서의 this! 일반함수 내부에서 호출하면 this는 전역 객체 나타냅니다.

// function a() {
//   console.log(this);
// }

// a();

// //매소드 내에서의 this! -> func 호출된 객체를 나타내요

// const func = {
//   name: "시운",
//   age: 12,
//     function () {
//     console.log(this);
//   },
// };

// const person = {
//   name: "licat",
//   age: 25,
//   a() {
//     console.log(this); // obj
//     console.log(this.name); // "licat"
//     function b() {
//       //메소드 내부의 함수는 일반함수로
//       console.log(this); // window
//       console.log(this.name); // window의 전역속성을 호출했다는거네요 근데 그게 빈문자열
//     }
//     b();
//   },
// };
// person.a();

// 화살표 함수 내에서의 this!
// 함수가 정의된 위치의 컨텍스트를 유지

// 화살표 함수를 감싸고있는 메소드가 가르키고 있는게 obj 이다. 싱기해용
// const obj = {
//   func1: function () {
//     const func2 = () => {
//       console.log(this); // obj
//     };
//     func2();

//     const func3 = function () {
//       console.log(this); // window
//     };
//     func3();
//   },
// };

// obj.func1();

// 생성자 함수내에서의 this!
// new 키워드를 사용하여 생성자 함수를 호출하면, this는 새로 생성된 객체를 나타냅니다.

// function Person(name) {
//   this.name = name;
//   console.log(this);
// }

// const person1 = new Person("licat");

//생성자 함수란
//객체를 생성할 때 사용하는 함수
// new라는 키워드를 붙인다. new 키워드와 함께 호출되어 새로운 객체를 생성하고 초기화하는 역할을 합니다.

// let myArr = new Array(1, 2, 3);
// let myArr2 = new Array(4, 5, 6);

// myArr2.length;
// myArr.length;

// myArr.forEach((item) => {
//   console.log(item);
// });

// myArr2.forEach((item) => {
//   console.log(item);
// });

// 이벤트 핸들러 내에서 this!
// 이벤트 핸들러 내에서 this는 이벤트가 발생한 DOM 요소를 가리킵니다

// const button = document.getElementById("btn");
// button.addEventListener("click", function () {
//   console.log(this); //
// });
