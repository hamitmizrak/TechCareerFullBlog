//calback function
//Bir fonksiyon çalışmasını bütün işler bittikten sonra  başka bir fonksiyonun çalışmasını sağlayan fonksiyonlara callback fonksiyon denir.
// 1.adım önce javase bitir sonra javaee bitir
function callBackFunction(x, y, z,callback) {
  let dizi = [];
  for (let i = 0; i <= 2; i++) {
    dizi[i] = callback(arguments[i] + 5) ; //gelen paremetreleri almak için kullanıyoruz
  }
  return dizi;
}

function callbackFunctionAdded(x){
  return x+15;
}

let param = callBackFunction(2, 7, 15,callbackFunctionAdded);
console.log(param);