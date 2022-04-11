//Eğer gelen değer direk adi olaak olmasını istiyorsam
let student = function(){
  console.log("Nasılsınsın"+this.adi)
}

let object={adi:"Hamit"}
student.call(object);
student.apply(object);
let yeni=student.bind(object);
yeni()