//object literal

//ES5
let dizi = [
  { adi: "Adi1", soyadi: "Soyadi1" },
  { adi: "Adi2", soyadi: "Soyadi2" },
  { adi: "Adi3", soyadi: "Soyadi3" },
];

//map: anonymous function bekler
//dizideki bütün dataları param diye yazalım
let diziEs5Map = dizi.map(function (param) {
  //return param.soyadi;
  return param;
});
console.log(diziEs5Map);


//ES6
let diziEs6Map = dizi.map(data =>{ return data});
console.log(diziEs6Map);