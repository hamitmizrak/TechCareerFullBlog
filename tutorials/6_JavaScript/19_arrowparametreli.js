//ES6 Parametresiz
let es6 = () => {
  console.log("ES6");
};
es6();

//ES6 Parametreli eğer {} kullanmazsan return kullanma
let es6x = (a, b) => a + b;
console.log(es6x(7, 3));

//ES6 Parametreli eğer {} kullanırsak mutlaka return kullanmalısın
let es6y = (a, b) => {
  return a + b;
};
console.log(es6y(7, 3));

//ES6
let es6z=  (value)=>value.toUpperCase();
console.log(es6z("hamit mizrak"))
