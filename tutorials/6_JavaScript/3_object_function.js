let Stu = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
  console.log(this);
  this.birtdayAge = function () {
    return 2022 - yas;
  };
};

let result = new Stu("Hamit", "Mızrak", 36);

console.log("adı:" + result.adi);
console.log(result.birtdayAge());
