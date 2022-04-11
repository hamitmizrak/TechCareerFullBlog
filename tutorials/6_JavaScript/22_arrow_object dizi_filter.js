let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//filter anonymous function kullanıyoruz
//ES5
let es5Filter = dizi.filter(function (data) {
  return data % 2 == 0;
});
console.log(es5Filter);

//ES6
let es6Filter = dizi.filter((data) => data % 2 == 0);
console.log(es6Filter);
