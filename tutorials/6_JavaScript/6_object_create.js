//constructor
let Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
  this.birtdayAge = function () {
    return 2022 - yas;
  };
  console.log(this);
};

var result = Object.create(Student);
result.sayHello = "Merhabalar";
console.log(result);
