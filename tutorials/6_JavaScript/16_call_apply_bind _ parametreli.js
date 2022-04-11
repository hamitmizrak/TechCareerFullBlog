//Eğer gelen değer direk adi olaak olmasını istiyorsam
let student = function(javase,javaee){
  console.log("Nasılsınsın "+this.adi+" "+javase+" "+javaee)
}

let object={adi:"Hamit"}
student.call(object,'primitive','hibernate'); //
student.apply(object,['primitive','hibernate']); //apply ==> dizi olacak
let yeni=student.bind(object,"param1","param2");
yeni()