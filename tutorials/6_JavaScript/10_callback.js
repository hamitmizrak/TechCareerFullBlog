//calback function
//Bir fonksiyon sonucu bir başka fonkisyionunn girdisiyse bu fonksiyonlara callback fonksiyon denir.
// 1.adım önce javase bitir sonra javaee bitir

function ikinci(deger) {
  console.log(deger);
}

function birinci(num1, num2, callback) {
  let multiple = num1 * num2;
  callback(multiple);
}
birinci(9, 5, ikinci);
