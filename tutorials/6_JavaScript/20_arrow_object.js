//object literal

//ES5
let es5 = function (adi, soyadi) {
  return {
    adi: adi,
    soyadi: soyadi,
  };
};
console.log(es5("Hamit", "Mızrak"));

//ES6
// let es6 =  (adi, soyadi)=>({})
let es6 = (adi, soyadi) => ({
  adi: adi,
  soyadi: soyadi,
});
console.log(es6("Hamit", "Mızrak"));
