//constructor
let Computer = function (marka, uretimYili) {
  this.marka = marka;
  this.uretimYili = uretimYili;
  //console.log(this);
};

Computer.prototype.uretimYili = function () {
  return 2022 - this.uretimYili;
};

let MsiConstructor = function (marka, uretimYili, renkliKlavye) {
  Computer.call(this, marka, uretimYili); //this=MsiConstructor objesini al
  this.uretimYili = uretimYili;
};


let msi=new MsiConstructor("msi44",2022,"klavyeli renkli");
console.log(msi);
