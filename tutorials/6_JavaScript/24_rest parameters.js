//rest parameters: gelen bütün dizileri almak için kullanıyoruz.

//ES5 1.örnek
function rest1Es5() {
  console.log(arguments);
}
rest1Es5(5, 10, 15);

console.log("++++++++++++++++++++++++");

//ES5 2.örnek
function rest2Es5() {
  let dizi = Array.prototype.slice.call(arguments);
  let toplam = 0;
  dizi.forEach((data) => {
    toplam += data;
  });
  return toplam;
}
console.log(rest2Es5(5, 10, 15));
///////////////////////////////////////////////////////////////////
//ES6 2.örnek
function rest2Es6(...dizi) {
  let toplam = 0;
  dizi.forEach((data) => {
    toplam += data;
  });
  return toplam;
}
console.log(rest2Es6(5, 10, 15));


//ES6 2.örnek
function rest3Es6(...dizi) {
  let toplam = 0;
  dizi.forEach(data => toplam += data);
  return toplam;
}
console.log(rest3Es6(5, 10, 15));
