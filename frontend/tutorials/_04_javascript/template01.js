//single line comment
/* 
multiple line comment
*/
//alert("Merhabalar external js");
////////////////////////////////////////////
//alert("popup1");
//window.alert("popup2");
// console.log("loglama");
// document: bu sayfa
// document.write("Yazı yazdım");

// var sayi5="Merhabalar";// Değişken oluşturma(Declaration)
// let sayi6; // variable Declaration
// let baslangicDegeriVermek=44;// tanımlama(initialization)

/////////////////////////////////////////////
//variables
//camel case
//sayı ile başlama
//tire ile ayırma
//$ ile başlayabilirsin
// _ $ ile başlayabilirsin

// var _person_Name44="Hamit";
// console.log(_person_Name44);

// var x1;
// var x2;
// var x3;
// x1=44;
// x2=16;
// x3=x1+x2;
// console.log(x3)

// var x1,x2,x3;
// x1=44.16;
// x2=16;
// x3=   x1   +  x2;
// console.log(x3);

// var isLogin=true;
// console.log(isLogin)

//Cast
//Number  ()==> sayılar
//String()  ==> kelimeler
//boolean ==> true false

/////////////////////////////////////
//dynamic type
// var global=66;
// global=11;
// console.log(global)

// let  local=44;    //ES6(2015)
// local=15;
// console.log(local)

// const sabit=3.14; //ES6(2015)
// console.log(sabit)
///////////////////////////////

//operator
// Logic Operators   &&=ve ||=veya

// Mathematics Operators + - * / %
// var x1=16,x2=4;
// console.log((x1+x2));
// console.log((x1-x2));
// console.log((x1*x2));
// console.log((2**5));
// console.log((x1/x2));
// console.log((x1%x2));

// Comparison Operators
// var  x1=16,x2=5;
// = (atama)
// == (eşittir mi)
// === (eşitti mi ? types ?)
// >
// >=
// <
// <=
// ?
// console.log(x1=x2);

// increment –deincrement
// var x1=10;
// console.log(x1++);
// console.log(x1);

// var x1=10;
// console.log(x1--);
// console.log(x1);

// Postfix increment –deincrement
// var x1=10;
// console.log(++x1);
// console.log(x1);

// var x1=10;
// console.log(--x1);
// console.log(x1);

/////////////////////////////////////////////////////
// 1byte=8 bit (0 ve/veya =1 bit)
//binary

// console.log(10+20)
// console.log("10"+"20")

//prompt:string gelir
//cast
// var x1= Number(prompt("Lütfen 1.sayıyı giriniz"));
// var x2= Number(prompt("Lütfen 2.sayıyı giriniz"));
// var x3=x1+x2;
// console.log(x3);

//cast
// Number() ==> Bu artık sayıdır
// String() ==> Bu artık Stringtir

/////////////////////////////////////////////////////
//typeof (türünün ne olduğunu string ? number ? boolean mı)
// var x1=true;
// console.log(typeof x1);

//undefined
// var x1;
// console.log(x1);

//NaN: Not A Number
// 32/"asd"
// var x1=prompt("Lütfen bir sayı giriniz");
// var x2=x1**x1;
// console.log(x2);

//isNaN()

//Infinity
// var x1=5/0; //Sonsuz
// console.log(x1)
////////////////////////////////////////////////////
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.sqrt(16)) //karekök
// console.log(Math.min(5,6,2,5,2525,-555))
// console.log(Math.max(5,6,2,5,2525,-555))
// console.log(Math.abs(-16)) //mutlak
// console.log(Math.pow(2,5)) //üslü sayılar
// console.log(Math.random()*4+1) //rastgele sayı
// console.log(Math.ceil(4.1))//yukarı yuvarlamak
// console.log(Math.floor(4.9))//aşağı yuvarlamak
// console.log(Math.round(4.4))

///////////////////////////////////////////////////
//Number
//decimal
//binary
//0124356789ABCDEF
// var hexadecimal=0xFA;
// console.log(hexadecimal)//10 tabanda karşılığı

// //binary=2'lik tabanda
// //01
// var binary=0b11;
// console.log(binary)

// //bilimsel gösterim
// var bilimsel=3452e+5; 345200000
// console.log(bilimsel)

// //Number
// var x1=Number("16");

// //toString(): 10 sayıyı diğer tabanalara çevirme
// var sayi=32;
// console.log(sayi.toString(2));
// console.log(sayi.toString(8))
// console.log(sayi.toString(10))
// console.log(sayi.toString(16))

// //NaN
// var isNot=16/"asd";
// console.log(isNot);

// var sonuc=true;
// console.log(!sonuc)

// //isNaN
// var isSayi=16/16;
// console.log(!isNaN(isSayi))

///////////////////////////////////////////////////
//String
let kelime = 'Html5 Css3 Js Css3 '

// kaç tane harf var ?
// console.log(kelime.length)

//trim: başındaki veya sonundaki boşlukları alıyor.
// console.log(kelime.trim().length)

//bütün karakterleri küçük yap
// kelime=kelime.toLowerCase()
// console.log(kelime);
//console.log(kelime.toLowerCase())

//native code: parantez yazmaksak
//bütün karakterleri büyük yap
// console.log(kelime.toUpperCase())

//charAt(0) ==> biz sayı veriyoruz bize o sayıya karşılık gelen harfi veriyor.
//  console.log(kelime.charAt(0));

// boşluk bir karektir
// substring=string'i parçalamak
//  console.log(kelime.substring(6))
//  console.log(kelime.substring(0,5)) //0<=x<5

// concat: sonuna ekleme yapar.
//  console.log(kelime.concat("sonradan eklendim"));

//ile başlıyorsa ==> true
// console.log(kelime.startsWith('H'))

//ile bitiyorsa ==> true
// console.log(kelime.endsWith('l5 '))

// console.log(kelime.indexOf('Css3'))
// console.log(kelime.search('Css3'))
// console.log(kelime.lastIndexOf('Css3'))

// console.log(kelime.split(' '))
// console.log(kelime.join())
// console.log(kelime.replace())
// console.log(kelime.slice())
// console.log(kelime.repeat())

///////////////////////////////////////////////////////
//escape characters
//back slash \
//special symbol
// console.log("\"Deneme")
// console.log('Deneme')

//////////////////////////////////////////////////////

//validation
//exception handling

//istisna fırtaltırız
// throw "sayıyı sıfıra bölemezsin";

// try {
//     //kodlar gövdesi
//     denem44
//     let sayi=0/3;
//     console.log(sayi)

// } catch (error) {
//     //hata olursa burası devreye girsin
//     console.log(error.message);
//     console.log(error.name);
//     //bilerek istisna gelmesini istersek

// } finally{
// console.log("Burası kesin çalışacak");
//  //db.close()
//  //socket.close()
// }

// try {
//   merhabalar
//   console.log("2.alan")
//   throw "referans yoktur";
// } catch (error) {
//   alert(error.message)//istisna mesajıyla bilgilerndir
//   alert(error.name) //istisna türü

// }

///////////////////////////////////////////////////////////
// //1.function :parametresiz
// function deneme1(){
//     let number1,number2;
//     number1= Math.round(Number(prompt("1.sayı"))) ;
//     number2= Math.round(Number(prompt("2.sayı")))  ;
//     console.log((number1 + number2));
//     console.log((number1 - number2));
//     console.log((number1 / number2));
//     console.log((number1 * number2));
// }
// deneme1();

// //2.function:parametreli
// function deneme2(number1,number2){ //parametre
//     console.log((number1 + number2));
//     console.log((number1 - number2));
//     console.log((number1 / number2));
//     console.log((number1 * number2));
// }
// deneme2(10,2);//argüman

//3.function :return
//eğer bir değişkende kullanmak istersek return kullanıyoruz.
// function deneme3(number1){ //parametre
// let result=number1**number1;
// return result;
// }
// let deger=  deneme3(4);
// console.log(deger)

//4.function
//anonymous function: isimsiz function
// function (){
//         return "Merhabalar";
//     }

//5.function
//arrow function:
//  ()=>{}

//6.function:
//Immediate function : Hemen Çalışsın yani function yazmadan çağırmak istiyorsak
// ()()

////////////////////////////////////////////////////////////////////////
// // //1.evre
// function deneme1() {
//   console.log('Merhabalar Normal Function')
// }
// deneme1()

// // //2.evre
// // //anonymous function direk kullanmak için ===> function(){}
// let result2 = function () {
//   console.log('Merhabalar anonymous function')
// }
// result2()

// //  //3.evre: arrow function
// //arrow function, ===>  ()=>{}
// let result3 = () => {
//   console.log('Merhabalar arrow function')
// }
// result3()

// // 4.evre: Immediate function: hemen kullanmak
// //  ===> ()()
// ;(function deneme() {
//   console.log('Merhabalar Immediate function')
// })()

//////////////////////////////////////////////////////////////////////
//conditional (Şart)
// let sayi="1";
// console.log(typeof sayi)

// if(sayi===1){
//     console.log("sayı 1 eşittir");
// }else{
//     console.log("sayı 1 eşit değildir");
// }

// //Ternary  ===> () ?  :  ;
// let ter= (sayi===1) ? "sayı 1 eşittir"  :"sayı 1 eşit değildir" ;
// console.log(ter);

// ()()
// let result = () => {
//   let sayi = Number(prompt('Lütfen bir sayı giriniz'))
//   //if elseif else
//   if (sayi === 1) {
//     console.log('sayı 1 eşittir')
//   } else if (sayi === 2) {
//     console.log('sayı 2 eşittir')
//   } else if (sayi === 3) {
//     console.log('sayı 3 eşittir')
//   } else if (sayi === 4) {
//     console.log('sayı 4 eşittir')
//   } else if (sayi === 5) {
//     console.log('sayı 5 eşittir')
//   } else if (sayi == 6) {
//     console.log('sayı 6 eşittir')
//   } else if (sayi === 7) {
//     console.log('sayı 7 eşittir')
//   } else if (sayi === 8) {
//     console.log('sayı 8 eşittir')
//   } else if (sayi === 9) {
//     console.log('sayı 9 eşittir')
//   } else if (sayi === 10) {
//     console.log('sayı 10 eşittir')
//   } else {
//     console.log('sayı 1<=x<=10 dışındadır')
//   }
// }
// result();
//////////////////////////////////////////////////////////////////////////
//kullanıcıdan bir sayı alacağım bu sayı negatif mi pozitif mi ?  arrow function
// let isNegative = () => {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   let result = number < 0 ? 'negatif' : 'pozitif'
//   console.log(result)
// }
//isNegative();
/////////////////////////////////
//kullanıcının girdiği sayı tek mi çift mi ? bulan anonymous function yazalım?

// let even = function () {
//   let number = Number(prompt('Lütfen bir sayı giriniz'))
//   if (number % 2 == 0) {
//     console.log('sayı çifttir')
//   } else {
//     console.log('sayı tektir')
//   }
// }
//even();

/////////////////////////////////////////////////////////////
// function result5() {
//   let sayi = Number(prompt('Lütfen bir sayı giriniz'))
//   //Switch-case
//   switch (sayi) {
//     case 1:
//       console.log('sayı 1 eşittir')
//       break
//     case 2:
//       console.log('sayı 2 eşittir')
//       break
//     case 3:
//       console.log('sayı 3 eşittir')
//       break
//     case 4:
//       console.log('sayı 4 eşittir')
//       break
//     case 5:
//       console.log('sayı 5 eşittir')
//       break
//     case 6:
//       console.log('sayı 6 eşittir')
//       break
//     case 7:
//       console.log('sayı 7 eşittir')
//       break
//     case 8:
//       console.log('sayı 8 eşittir')
//       break
//     case 9:
//       console.log('sayı 9 eşittir')
//       break
//     case 10:
//       console.log('sayı 10 eşittir')
//       break
//     default:
//       console.log('sayı 1<=x<=10 dışındadır')
//       break
//   }
// }
//result5();

////////////////////////////////////////////////////////////////////////
//Loop
//başlangıç:  i=1;
//bitiş(şart)    :  i<=10

//i++      :artırma
//i=i+1    :artırma
//i+=1     :artırma

//For Döngüsü
// for(let i=2; i<=10; i+=2){
//     let sayi=Number(prompt(i+". sayı"))
//     console.log(sayi)
// }

//1-10 arasında sayılar toplamı olsun
//bu sayılar arasındaki 4 sayısını dahil etmeyin

// let toplam = () => {
//   let sum = 0 //başlangıç değer

//   for (let i = 1; i <= 100; i++) {
//     if (i === 4) {
//       continue //o değerli es geç
//     }
//     if (i > 10) break //döngüyü kırmak
//     sum = sum + i
//   }
//   console.log('Toplamları: ' + sum)
// }
//toplam();
//55

/////
//while Döngüsü
// let i=1;
// while(i<=2){
//     let sayi=Number(prompt(i+". sayı"))
//     console.log(sayi)
//     i+=1;
// }

/////
//do-while Döngüsü
// let i = 1
// do {
//   //ister şart sağlansın ister sağlanmasın kesinlikle 1 kere çalışacak
//   console.log(i + ' kere çalıştı')
//   i++;
// } while (i < 3);
//////////////////////////////////////////////////////////////////////////////
//1-) Kullanıcı tarafından alınan bir sayı
//1<=x<=kullanıcıdı rastgele sayı oluştursun(tam sayı) Math ?
//examples: 2 5 2 3 1
//Toplamları
//ortalaması
//en küçük sayı bulsun
//arrow function ?
//S.O.L.I.D

////////////////////////////////////////////////////////////////////////
//Diziler
let dizi = ['html5', 'css3', 'js'] //daha hızlı,daha okunaklı
//console.log(dizi);

let dizi33 = [1, 2, 3, 'a', 'b', ' ', 'c', -1, -2, -3]

// var sayi5="Merhabalar";// Değişken oluşturma(Declaration)
// let sayi6; // variable Declaration
// let baslangicDegeriVermek=44;// tanımlama(initialization)

let dizi2 = new Array('html5', 'css3', 'js')
//console.log(dizi2);

//BAŞ-SON EKLEMEK
//-----------
//dizi.push() ==> sona bir eleman eklemek
//dizi.unshift() ==> başa bir eleman eklemek

//BAŞ-SON ÇIKARMAK
//-----------
//dizi.pop() ==> sondan 1 eleman çıkar
//dizi.shift() ==> baştan 1 eleman çıkar

//SİLMEK
//delete dizi[0] ==> istediğim indis numarasındaki dizi elemanını silmek
//splice()

//SIRALAMAK
//dizi.sort() ==> Küçükten büyüğe doğru sıralamak
//dizi.reverse() ==> büyükten Küçüğe doğru sıralamak

///////////////////////////////////////////////////////////////
//DİZİ TUTORIALS
// console.log(dizi)
// console.log(dizi[8]) ==> 8.indis=9.eleman
// console.log(dizi[dizi.length - 1]) //son eleman
// console.log('+++++++++++++++++++++++++++++++')

// //iterative for
// for (let i = 0; i < dizi.length; i += 1) {
//   console.log(i + 1 + ' ' + dizi[i])
// }

// console.log('+++++++++++++++++++++++++++++++')
// console.log('for in'):indis lazımsa
// //for in
// for (let temp in dizi) {
//   console.log(temp + ' ==> ' + dizi[temp])
// }

// console.log('+++++++++++++++++++++++++++++++')
// console.log('for of')
// //for of
// for (temp of dizi) {
//   console.log(temp)
// }

///////
//dizi fonksiyonları

//+++++++
//EKLEME
//push() ==> sona bir eleman eklemek
// dizi.push('sona eklendi lifo')
// for (temp of dizi) {
//   console.log(temp)
// }

//unshift() ==> başa bir eleman eklemek
// dizi.unshift('Başa eklendi')
// for (temp of dizi) {
//     console.log(temp)
//   }

//-------
//ÇIKARMA
//pop() ==> sondan 1 eleman çıkar
// dizi.pop()
// for (temp of dizi) {
//   console.log(temp)
// }

//shift() ==> baştan 1 eleman çıkar
// dizi.shift()
// for (temp of dizi) {
//   console.log(temp)
// }

//Delete ==> istediğim indis numarasındaki dizi elemanını silmek
// console.log(dizi)
// delete dizi[2];
// console.log("+++++++++++++++++++")
// for(temp of dizi ){
// console.log(temp)
// }

// //sort() ==> küçükten büyüğe doğru sıralama yapar
// console.log(dizi.sort())

// //reverse() ==> büyükten küçüğe doğru sıralama yapar
// console.log(dizi.reverse())
// console.log(dizi)

///////////////////
//Dizi fonkisyonlarına devam edilecek

// +++ Join ++++
// array içerisindeki bütün verileri birleştirirek string değer döndürür
//defaultta virgül ile ayrılır

let joinTutorials = () => {
  let dizi = ['java', 'html', 'css', 'js']
  console.log(dizi)

  let kelime = dizi.join()
  // result: "java,html,css,js"

  console.log(typeof kelime)

  kelime = dizi.join('')
  // result: "javahtmlcssjs"

  kelime = dizi.join(' & ')
  // result: "java&html&css&js"
  console.log(kelime)
}
//joinTutorials();

//concat (Birleştirmek)
//dizide birleştirmek string birleştirmek için kullanabiliriz.
function concatTutorials() {
  let kelime1 = 'Merhabalar'
  let kelime2 = ' Nasılsınız'

  let birlestir1 = kelime1 + kelime2
  console.log('1. artı birleştir: ' + birlestir1)

  let birlestir2 = kelime1.concat(kelime2)
  console.log('2. concat birleştir: ' + birlestir2)

  //dizi birleştirmek
  const dizi1 = ['1', '2', '3', '']
  const dizi2 = ['4', '5', '6']

  //string olarak birleştirir
  let diziBirlestir1 = dizi1 + dizi2
  console.log(diziBirlestir1)

  //dizi olarak birleştirir
  let diziBirlestir2 = dizi1.concat(dizi2)
  console.log(diziBirlestir2)
}
//concatTutorials();

//******************************************* */
//dizilerde topluca eklemej veya çıkarmak
//+++ splice() ++++ Ekle veya Sil
function spliceTutorials() {
  let dizi55 = [1, 2, 3, 4, 5, 6, 7]
  console.log(dizi55)

  //parametredeki 1.eleman: indisi belirlemek için
  //parametredeki 2.eleman: kaç tane silinceğini
  //  dizi55.splice(2, 4) //2.indisten(3.eleman) 4 tane sil  indis=0 başlar
  //   console.log(dizi55)

  //parametredeki 1.eleman: indisi belirlemek için
  dizi55.splice(3, 0, 'ekledim', 'Yeni') //0.indisten başla ekleme
  console.log(dizi55)
}
//spliceTutorials();

// +++ slice() +++ dizi kopyalamalak
function sliceTutorials() {
  let eskiDizi = [1, 2, 3, 4, 5, 6, 7]
  console.log(eskiDizi)

  let yeniDizi = eskiDizi.slice(3) //3.indisten başla sonuna kadar kopyala yeniDizi ata
  console.log(yeniDizi)
}

//sliceTutorials();

//+++++++++++++++++++++++++++++++++++++++++++

// Örnek: 1.dereceden 2 bilinmeyenli denklem
// Kullanıcıdan aldığımız 2 değişkeni hesaplatarıalım?
// y=3x+5k; x ve k kullanıcıdan alınan sayılara göre hesaplama yapılactır (Arrow function)

let equationWithUnKnow = () => {
  let number1, number2, result
  number1 = Number(prompt('1.sayı'))
  number2 = Number(prompt('2.sayı'))
  result = 3 * number1 + 5 * number2
  console.log(result)
}
//equationWithUnKnow();

//Örnek: 2 Dereceyi fahrenhaya çeviren function (Anonymous function)
//Kullanıcıdan alınan dereceyi Fahrenhata çeviren function
//Formül: (dereceSayi * 9 / 5) + 32;
let toFahrenhayt = function () {
  let degree, result
  degree = Number(prompt('Lütfen dereceyi giriniz'))
  result = (degree * 9) / 5 + 32
  console.log(result)
}
// toFahrenhayt();

//Örnek6:  1'den 10'a kadar sayıların toplamı ancak 5'e bölünebilen sayılar hariç
// continue
let totalfiveExcluded = () => {
  let sum = 0 //başlangıç bir değer: sıfır etkisiz toplama
  for (let i = 1; i <= 10; i = i + 1) {
    if (i % 5 === 0) continue
    sum += i
  }
  console.log('toplam: ' + sum)
}

//totalfiveExcluded();

//Örnek7:
// Kullanıcıdan alınan sayıya göre random sayılar oluştursun
// 0-) ilk ve son sayının toplamı ?
// 1-) Toplamları
// 2-) Ortalaması
// 3-) Tek sayı toplamları
// 4-) Kaç tane Tek sayı
// 5-) çift sayı toplamları
// 6-) çift tane Tek sayı

//Random
let rndArray = () => {
  //değişkenleri(variable)
  let rndNumber,
    firstEndSum = 0,
    number,
    array = []
  number = Number(prompt('Lütfen bir sayı giriniz'))
  //döngüde rastgele sayı oluşturmak
  for (let i = 0; i < number; i++) {
    rndNumber = Number(Math.round(Math.random() * 9 + 1))
    array[i] = rndNumber
  }
  console.log(array)
  firstEndSum = array[0] + array[array.length - 1]
  console.log(firstEndSum)
}

//sonarQube
//rndArray();

///////////////////////////////////////////////////////
//debug nedir ?
//debug nasıl atılır ?
//F5
// let sayi11=11;
// let sayi22=22;
// let sonuc=sayi11+sayi22;
// console.log(sonuc);

//////////////////////////////////////////
//diziye parametre göndermek ve almak
function diziBaslangic() {
  // let dizi=[1,2,3]; //okunabilirliği,hız açısından iyidir
  let dizi = new Array(1, 2, 3)
  return dizi
}

function diziVeriAl(temp) {
  console.log(temp)
}

//monad
//diziVeriAl(diziBaslangic());

////////////////////////////////////////////
//Date
let dateTutorials = () => {
  let tarih = new Date()

  //get
  console.log(tarih.getHours())
  // console.log(tarih.getFullYear());

  //set
  console.log(new Date('2015-1-1'))
  console.log(new Date(1000000000))
}

//dateTutorials();

///////
let dateShow = () => {
  // let tarih=new Date();
  // let saat=tarih.getHours();
  console.log(new Date().getHours())
  let ternary = new Date().getHours() >= 20 ? 'az kaldı' : 'çok zaman var'
  console.log(ternary)
}

//dateShow();

/////////////////////////////////////////////////////////////
//Object:Bir varlığın özelliklerin toplamıdır
//object camelCase

//literal Object(Arrow Function)
// let object=()=>{
//     // let array1=[];
//     let array1=new Array();
//     console.log(array1)
//     console.log("**************************")
//     // let obj1={};
//     let obj1=new Object();
//     console.log(obj1)
// }

// object();
//++++++++++++++++++++++++
// let object2=()=>{
//     let person={};

//     //değerler vermek istiyorum
//     person.firstName="Hamit";
//     person.job="Computer Engineer";
//     person.middleName="Göbek Adı";

//     console.log(person);
// }
// object2();

//+++++++++++++++++++++++++
// let object2=()=>{
//     let person={};
//     //değerler vermek istiyorum
//     person.firstName="Hamit";
//     person.job="Computer Engineer";
//     person.middleName="Göbek Adı";

//     console.log(person.middleName.toUpperCase());
// }
// object2();

//+++++++++++++++++++++++++
// let object2=()=>{
//     let person={
//         firstName:"Hamit",
//         job:"Computer Engineer",
//         middleName:"Göbek Adı"
//     };
//     person.lastName="Mızrak";
//     person.middleName="ikinci isim değişti";
//     person.date=new Date().getHours();
//     console.log(person.middleName.toUpperCase());
//     console.log(person);
// }
// object2();

//++++++++++++++++++++++++
//Object yeni attribures eklemek
// let object2 = () => {
//   let person = {
//     firstName: 'Hamit',
//     job: 'Computer Engineer',
//     middleName: 'Göbek Adı',
//   }
//   person.lastName = 'Mızrak';
//   console.log(person.middleName.toUpperCase())
//   person.middleName = 'İkinci ismi değişti';

//   console.log(person)
// }
// object2()

// //++++++++++++++++++++
// //Object Function
// let object2 = () => {
//     let person = {
//       firstName: 'Hamit',
//       job: 'Computer Engineer',
//       middleName: 'Göbek Adı',
//       lastName : 'Mızrak',
//       hesaplama: function(sayi1,sayi2){
//           return sayi1+sayi2;
//       }
//     }
//     console.log(person.hesaplama(10,20))
//   }
//   object2()

//Nested Object: Obje içinde Object
//++++++++++++++++++++
//Object Function-1
// let object2 = () => {
//     let person = {
//       firstName: 'Hamit',
//       job: 'Computer Engineer',
//       middleName: 'Göbek Adı',
//       lastName : 'Mızrak',
//       hesaplama: function(sayi1,sayi2){
//           return sayi1+sayi2;
//       },
//       damar:{
//           damarAdi:"Toplar Damar",
//           damarTuru:"damar turu 4521"
//       }
//     }
//     console.log(person);
//     console.log(person.damar.damarAdi);
//   }
//   object2()

//++++++++++++++++++++++++++++++++++++++++++

//Object Diziler
let objectArray = () => {
  let person = {
    //attributes
    firstName: 'Hamit',
    job: 'Computer Engineer',
    middleName: 'Göbek Adı',
    lastName: 'Mızrak',
    //function
    hesaplama: function (sayi1, sayi2) {
      return sayi1 + sayi2
    },
    //object
    damar: {
      damarAdi: 'Toplar Damar',
      damarTuru: 'damar turu 4521',
    },
    diller: ['JavaScript', 'Java', 'C#', 'Pyhton'],
    dillerOzellikler: {
      roles: 'asd',
    },
  }
  console.log(person)
  console.log(person.damar.damarAdi)
  console.log(person.diller[0])
}
//objectArray();

////////////////////////////////////////////////////////
//Template Literal ES6:dah kolay işlemler yapmamıza olanak sağlar.
//1-)MultiLine Literal
//2-) interpolation Literal

//+++++++++++++++++++++++++++++++++++++
// let templateLiteralTutorials=()=>{

//   let normalString="Merhabalar çift tırnak";
//   console.log(normalString);

//   let normalString2='Merhabalar çift tırnak';
//   console.log(normalString2);

//   //ES6:dah kolay işlemler yapmamıza olanak sağlar.
//   let templateString=`Merhabalar backtick`;
//   console.log(templateString);

// }
// templateLiteralTutorials();
//+++++++++++++++++++++++++++++++++++++

//1-)
//Multi Line Template Literal
let templateLiteralMultiLine = () => {
  //escape characters: \n
  let normalString = 'Merhabalar nasılsınız\nAlt satır'
  console.log(normalString)

  //ES6:
  //Multi Line Template Literal
  let templateString = `Merhabalar nasılsınız
Alt satır`
  console.log(templateString)
}
//templateLiteralMultiLine();

//2-)
//interpolation: değişken çağırmak için ==> `${}`
let templateLiteralInterpolation = () => {
  let adi = 'Hamit',
    soyadi = 'Mızrak'
  console.log('Adı: ' + adi + ' soyadı:' + soyadi)
  console.log(`Adı: ${adi} Soyadı: ${soyadi}`)
}
//templateLiteralInterpolation();

//3-)
//Html Template
let templateLiteralHtmlTemplate = () => {
  let adi = 'Hamit',
    soyadi = 'Mızrak'

  //   let html=
  //   "<ul>"+
  //       "<li>"+adi+"</li>"+
  //       "<li>"+soyadi+ "</li>"+
  //   "</ul>";

  let html = `
<ul>
    <li>${adi}</li>
    <li>${soyadi}</li>
</ul>
`
  document.body.innerHTML = html
}
//templateLiteralHtmlTemplate();

//+++++++++++++++++++++++++++++++++++++++++
//constructor-1
function Student(adi, soyadi, meslek, dogumTarihi) {
  this.adi = adi
  this.soyadi = soyadi
  this.meslek = meslek
  this.dogumTarihi = dogumTarihi
  console.log(this)
  this.yas = function () {
    //return 2022 - dogumTarihi
    return new Date().getFullYear() - dogumTarihi
  }
}

//let sonuc = new Student('Hamit', 'Mızrak', 'BM', 1985)
//console.log(sonuc.yas());

//++++++++++++
//this: Bu yapı demektir. Bulundumuz Objeyi çağırmak veya root dizini çağırmak
let thisTutorials = () => {
  console.log(this)
  let sayi = this
  //alert(sayi);
  //return this;
}
//thisTutorials()

let thisFunctionTutorials = () => {
  let person = {
    adi: 'Hamit',
    soyadi: 'Mızrak',
    adSoyad: function () {
      return this.adi + ' ' + this.soyadi
    },
  }
  console.log(person)
}
//thisFunctionTutorials()

//this
//console.log(this)

//////////////////////////////////////////////////////////
//Event: bir olaydan sonra meydana gelebilecek başka olaylar.

function toplama(){
alert("onclick Alert")
}
//onmouse
//onkey
//onchange
//addEventListener

// toplama()
///////////////////////////////////////////////////////////
//DOM
// function changeParagraf(){
//   //alert("onclick Alert")

//   // HTML
//   //ID göre çağırma
//   // document.getElementById("paragraf_id").innerHTML="<b>Ben Dom'dan geldim</b>";
//   // document.getElementById("paragraf_id").innerText="<b>Ben Dom'dan geldim</b>";
//   // document.getElementById("paragraf_id").innerHTML=Date();

//   //NAME göre çağırma
//   // document.getElementsByName("paragraf_name")[0].innerHTML="<b>Ben Dom'dan geldim</b>";

//   //Class göre çağırma
//   // document.getElementsByClassName("paragraf_class")[0].innerHTML="<b>Ben Dom'dan geldim</b>";

//    //Tag'e göre çağırma
//    document.getElementsByTagName("p")[0].innerHTML="<b>Ben Dom'dan geldim</b>";

// }

function changeParagraf(){
  //id
  let valueParagraf=document.getElementById("paragraf_id");

  //HTML
  valueParagraf.innerHTML="<i>Html</i>";

  //CSS
  valueParagraf.style.color="blue";
  valueParagraf.style.fontSize="25px";
  valueParagraf.style.border="2px solid rgba(25,55,2,.8)";



}

//DOM attributes
// let result=document.getElementsByTagName("a")[0].getAttribute("href");
// let result=document.querySelector("#a_id").getAttribute("href");
//let result=document.querySelector("#a_id").setAttribute("src","deneme.png");
// alert(result)
// alert("deneme")


//////////////////////////////////////////////////////////
//callBackFunction

//promise

//listener








