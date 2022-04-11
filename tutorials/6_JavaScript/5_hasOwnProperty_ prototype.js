//constructor
let Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
  console.log(this);
};

var result = new Student("Hamit", "Mızrak", 36);

console.log(
  "evet kalıtımda böyle atribute var " + result.hasOwnProperty("adi")
);
