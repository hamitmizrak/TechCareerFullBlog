//constructor
let Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;

  console.log(this);
};

//kalıtımladım
Student.prototype.birtdayAge = function () {
  return 2022 - this.yas;
};

//adını kalıtımladım
Student.prototype.getAdi=function(){
  return this.adi;
}

//soyadını kalıtımladım
Student.prototype.getSoyadi=function(){
  return this.soyadi;
}

//yaşını kalıtımladım
Student.prototype.getYas=function(){
  return this.yas;
}

var result = new Student("Hamit", "Mızrak", 36);

console.log("doğum tarihi: " + result.birtdayAge());
console.log("adı: " + result.getAdi());
console.log("soyadı: " + result.getSoyadi());
console.log("yaş: " + result.getYas());
