//constructor
let Student = function(adi, soyadi, yas) {
  this.adi = adi;
  this.marka = marka;
  this.uretimYili=uretimYili;
  this.birtdayAge = function () {
    return 2022 - yas;
  };
  console.log(this);
};

var result = Object.create(Student,{
  adi:{value:"Hamit"},
  soyadi:{value:"Mızrak"},
  meslek:{value:"B.M"},
});

console.log(result);
