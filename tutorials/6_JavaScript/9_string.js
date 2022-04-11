var str1 = "Hamit";
var str2 = new String("44");

console.log(str1);
console.log(typeof str1);

console.log(str2);
console.log(typeof str2);

var object1 = {};
var object2 = new Object();

var dizi1 = [];
var dizi2 = new Array();

//String
String.prototype.repeat44 =  function (n) {
  return new Array(n + 1).join(this);
};
console.log("Hamit".repeat44(3)); //3 kere kendini tekrarlasın

//Array
var build_dizi = ["Hamit", "Mızrak", "Malatya"];
Array.prototype.remove44 =   function (kisi) {
  var index = this.indexOf(kisi);
  if (index > -1) {
    this.splice(index, 1); //1=1 tane elemen sil demek
  }
  return this; //diziyi geri döndürmek
};
console.log(build_dizi.remove44("Malatya"));
