// $("").

//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show')
  })

  $('#deneme44').css('color', 'red').css('background', 'black')

  function onSubmitFunction() {
    alert('submitted value 44')
  }
})

//form validation
$(function () {
  //Submit  Tıklandığında
  $('#btnSubmit').click(function () {
    //input içeriği aldım
    let email, password
    email = $('#user_email').val()
    password = $('#user_password').val()

    //validation Email
    if (email == '') {
      $('#validation_email').html('email boş geçilemez....')
    } else if (validateEmail(email) == false) {
      $('#validation_email').html('email uygun formatta girmediniz....')
    } else {
      $('#validation_email').html('')
    }
    //validation Password
    if (password == '') {
      $('#validation_password').html('Şifre boş geçilemez....')
    } else {
      $('#validation_password').html('')
    }

    function validateEmail(email) {
      let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    }
  })
})

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  var root=document.getElementById("react_root");
//  var template=(
//    <div>
//      <hr />
//      <h2>React DOM</h2>
//      <button className="btn btn-primary " style={{fontSize:"55px"}} >Gönder Dom</button>
//      <hr />
//    </div>
//  );

//  ReactDOM.render(template,root);

//    JS                      React
//   ------                  ---------
//    deneme                  {deneme}
//    onclick="deneme()"      onClick={deneme}

//    Bootstrap               React
//    ------                  ---------
//    class                   className

//    Css                     React
//    ------                  ---------
//    style                   style={{fontSize:25px;}}

//basket start
var counter = 0
//Artırmak
let counterPlus = function () {
  counter++
  againCall()
  console.log('Artırıldı')
}

//Azaltmak
let counterMinus = function () {
  counter--
  againCall()
  console.log('Azaltıldı')
}

//Event
function againCall() {
  var eventTuto = (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p>Adet: {counter}</p>
          </div>
          <div className="col-md-2">
            {' '}
            <button
              onClick={counterPlus}
              className="btn btn-primary"
              style={{ fontSize: '14px' }}
              id="plus_id"
            >
              +
            </button>
          </div>
          <div className="col-md-2">
            {' '}
            <button
              onClick={counterMinus}
              className="btn btn-danger"
              style={{ fontSize: '14px' }}
              id="plus_id"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  )
  ReactDOM.render(eventTuto, document.getElementById('plus_minus'))
}
againCall()

//Timer
function timerClock() {
  var time = (
    <div>
      <p>
        <b> {new Date().toLocaleTimeString()} </b>
      </p>
    </div>
  )
  ReactDOM.render(time, document.getElementById('timer_id'))
}
//bir metodu sürekli belirli aralıklarda çağırmak istersek
setInterval(timerClock, 1000)

//TODO LIST
//variable
var listItemObject = {
  title: 'Todo List Uygulaması',
  listCounter: 'Liste Eleman sayısı',
  data: [],
}

//LIST CLEAR
let clearList = function () {
  listItemObject.data = []
  formTutorial()
}

//onSubmit
function formOnSubmit(event) {
  //form bileşenin submit olmaması
  event.preventDefault()
  var formInputData = event.target.elements.formInput.value
  //console.log(formInputData);
  if (formInputData) {
    listItemObject.data.push(formInputData)
    formTutorial()
    console.log('Eklendi: ' + formInputData)
    event.target.elements.formInput.value = ''
  }
}

function formTutorial() {
  var form = (
    <div>
      <h5 className="text-center44 text-uppercase mt-5">
        {listItemObject.title}
      </h5>
      <p>
        {listItemObject.listCounter} : {listItemObject.data.length}
      </p>

      {
        <ul>
          {listItemObject.data.map((temp) => {
            return <li key={temp.toString()}> {temp} </li>
          })}
        </ul>
      }

      <form onSubmit={formOnSubmit}>
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control" name="formInput" />
          </div>

          <div className="col-md-6">
            <button
              className="btn btn-warning mr-3"
              style={{ fontSize: '.6rem' }}
              type="submit"
            >
              Gönder
            </button>
            <button
              onClick={clearList}
              className="btn btn-danger"
              style={{ fontSize: '.6rem' }}
            >
              temizle
            </button>
          </div>
        </div>
      </form>
    </div>
  )
  ReactDOM.render(form, document.getElementById('todolistId'))
}

formTutorial()

//+++++++++++++++++++++++++++++++
//object
var object = {}
//console.log(object)

//constructor
let Student = function Student(adi, soyadi, yas) {
  this.adi = adi
  this.soyadi = soyadi
  this.yas = yas
  console.log(this)
}

//instance
//hasOwnPropert: Bu objede var mı yok mu ?
//var instanceData = new Student('Adi44', 'Soyadi44', 37)
//console.log(instanceData.hasOwnProperty('soyadi'))

//Object Create
var instanceData2 = Object.create(Student)
//console.log(instanceData2)

//property
Student.prototype.birthYear = function () {
  return new Date().getFullYear() - this.yas
}
//console.log('Adı: ' + instanceData.adi + '  Doğum Tarihi: ' + instanceData.birthYear(),)

//built-in-constructor
String.prototype.karesi = function (n) {
  return n * n
}
//console.log('X'.karesi(5))

//mutlak değerli kendi String functionımı oluşturualım ?
//mutlakDeger
String.prototype.mutlakDeger = function (n) {
  if (n > 0) return n
  else return -n
}
//console.log('Mutlak'.mutlakDeger(5))

//verilen iki sayının küçük olanın bulsun kucukSayi
String.prototype.kucukSayi = function (x1, x2) {
  if (x1 > x2) return x2
  else return x1
}
//console.log('kucuk'.kucukSayi(-150, 10))

//dizideki elemanlarda silmek
//["js","jquery","bootstrap"]
//diziIndexDelete["bootstrap"]
let dizi = ['js', 'jquery', 'bootstrap']
////console.log(dizi)

//dizideki elemanı silme
Array.prototype.arrayIndexDelete = function (data) {
  let index = this.indexOf(data)
  if (index > -1) {
    this.splice(index, 1)
  }
  return this
}
//console.log(dizi.arrayIndexDelete('js'));

//repeat
//console.log(new Array(4+1).join(1));

//String tekrar eden
String.prototype.wordRepetition = function (m) {
  let repeat = new Array(m + 1).join(this)
  return repeat
}
//console.log("Kelime".concat(" ").wordRepetition(2))

//+++++++++++++++++++++++++++++++++++++++++++++++
//Senkron Asenkron
//Single threaded çalışır
//Senkron:aynı anda sadece 1 tane process çalışması
// console.log("senkron 1.satır")
// var deneme=function(){
//   console.log("senkron 2.satır")
// }
// deneme();
// console.log("senkron 3.satır");

// console.log("**********************************************")

//Asenkron:
// console.log("asenkron 1.satır")
// const asenkron=()=>{
//   setTimeout(()=>{
//     console.log("asenkron 2.satır");
//   },4000)
// }
// asenkron();
// console.log("senkron 3.satır");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ES3:Javascript: 1995
//ES5:Ecma-262 Edition(2009)
//ES5 Özellikler
//1-) "use strict";
//2-) built-in-constructor built-in-constructor
//3-) Array.isArray()
//4-) Array.forEach() ==> döngü
//5-) Array.filter()  ==> objeden istediklerimiz gelsin
//6-) Array.map()     ==> objelerdeki bütün datalara erişmek
//7-) Array.indexOf()
//8-) Array.lastOf()
//9-) JSON.parse()
//10-) JSON.stringifly()
//11-) Date.now()
//+++++++++++++++++++++++++++++++++++
//JS single-threaded

// "use strict";

//callback:
//1.örnek
//1-Adım callback function yazılır.
//2.Adım içerdeki function yazılır
function birinci(x1, x2, callback) {
  var multiple = x1 * x2
  callback(multiple)
}

function ikinci(deger) {
  console.log(deger)
}

//birinci(4,5,ikinci)

//callback:
//2.örnek
//sıfır(0) başlasun kullanıcıdan alınan sayıya kadar döngüdeki sayılardan çift olanları ekranda gösteren callbackfunction yazalım ?
function evenNumberArray(callback) {
  var evenArray = []
  var pro = Number(prompt('Lütfen bir sayı giriniz'))
  for (var i = 0; i <= pro; i++) {
    if (i % 2 == 0) {
      evenArray.push(i)
    }
  }
  callback(evenArray)
}

function showMessage(data) {
  console.log(data)
}

//evenNumberArray(showMessage);
//callback hell

//Anonymous Function
var es5Anonymous = function () {
  console.log('ES5')
}

//+++++++++++++++
//DİZİ ==> Map , Filter ,forEach
var product = [
  { productName: 'Msi1', productPrice: 1000 },
  { productName: 'Msi2', productPrice: 2000 },
  { productName: 'Msi3', productPrice: 3000 },
  { productName: 'Msi4', productPrice: 4000 },
]
//console.log(product)

//Map
var es5Map = product.map(function (temp) {
  return temp.productName
})
//console.log(es5Map)

//Filter
var es5Filter = product.filter(function (temp) {
  return temp.productPrice >= 3000
})
//console.log(es5Filter)

////////////////
//OBJECT ==> this , forEach
var person = {
  name: 'Hamit',
  surname: 'Mızrak',
  java: [
    'servlet',
    'Jsp',
    'JSF',
    'Spring MVC',
    'Spring Data',
    'Spring Security',
  ],
  getJava: function () {
    console.log('dışardan çağırdım ' + this.name)
    var mecbur = this
    this.java.forEach(function (temp) {
      console.log(temp)
      console.log(mecbur.name)
    })
  },
}

// person.getJava()
/////////////////////////////////////////////////////////////////////////////////////////
//ES6
//let -const
//template literal ==> ``
//arrow function ()=>{}

//Immedia function (anonymous(){})()

//ES6 (1) Variable ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(let-const)
//  var adi="Hamit";
//  let adi2="Hamit";
//  const adi4="Ankara";

//global scope
let adi = 'Hamit'

//Function scope
function fullName() {
  let adi = 'Hamit444'
  let soyadi = 'Mızrak'
  console.log('function scope: ' + ' adi: ' + adi + ' soyadı: ' + soyadi)
}
// fullName();

// console.log("global Scope: adi ",adi)
// console.log("function Scope: soyadi ",soyadi);

//conditional Block
// if(true){
//   let yas=37;
//   console.log(yas)
// }

//ES6 (2) Literal ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Template Literal: BackTick ==> ``
//1-) Multi-line
//2-) Interpolation
//3-) Html Templates

//1-) Multi-Line
let deneme = 'Merhabalar\nNasılsınız'
// console.log(deneme)

let deneme2 = `Merhabalar\nNasılsınız
JS Kursu
`
// console.log(deneme2)

// 2.6 GHZ: 2.6 Milyar toplama

//2-) Interpolation
// let firstName=`Malatya`;
// let lastName=`Battalgazi`;
// console.log("İl: "+firstName+ " İlçe:"+lastName)
// console.log(`İl: ${firstName} İlçe: ${lastName}`)

console.log('*******************************************')
let student = {
  name: 'Hamit',
  surname: 'Mızrak',
}
// console.log(student.surname)
// console.log(`${student.surname}`)

//ES6 (3) Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//(Parametresiz Function)
//Normal
function deneme11() {
  console.log('Normal Function')
}
// deneme11()

//ES5
var deneme22 = function () {
  console.log('Anonymous Function')
}
// deneme22()

//ES6
var deneme33 = () => {
  console.log('Arrow Function')
}
// deneme33()

// console.log("************************************************")

//(Parametreli Function)
//Normal Parametreli
function deneme44(adi) {
  console.log('Normal Parametreli Function', adi)
}
// deneme44("Kayısı")

//Anonymous Parametreli
var deneme55 = function (adi) {
  console.log('Anonymous Function ', adi)
}
// deneme55("Kayısı Reçeli")

//Arrow Function Parametre
//eğer curl brackets kullanmazsak return kullanmamıza gerek yok
let deneme66 = (x, y) => x + y
let value66 = deneme66(6, 4)
// console.log(value66)

//examples
//benim gönderdiğim veriyi Büyültsün
let upperValue = (data) => data.toUpperCase()
// console.log(upperValue("Kızılay"))

//eğer curl brackets yazarsam  return kullanalım
let deneme77 = (x, y) => {
  return x + y
}
let value77 = deneme77(6, 4)
// console.log(value77)

/////////////////////////////////////////////////////////////////////////////
//+++++Immedia Function++++++++++++++++++++++++++++++++++++++++++++++++++++++
//()();
//Self Invoking Function(Immedia Function) ==> kendi kendini çağıran functionlar
//Parametresiz
// (function deneme(){
//   console.log("Çağırmadan kullanacağım Normal Functionsın")
// })();
// (function(){
//   console.log("Çağırmadan kullanacağım Anonymous Functionsın")
// })();

// (()=>{
//   console.log("Çağırmadan kullanacağım Arrow Functionsın")
// })();

// //Parametreli
// ((data)=>console.log(`Veri: ${data}`))("ES6");

//////////////////////////////////////////////////////////////////////////////
//Filter ES5-ES6
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arr)

// //Filter ES5 -ES6
// let es5Filter=arr.filter();
// //Filter ES5
var es5Filter44 = arr.filter(function (data) {
  return data % 2 == 1
})
// console.log(es5Filter44);

// //Filter ES6
let filterEs6 = arr.filter((data) => data % 2 == 0)
// console.log(filterEs6);

//////////
let product33 = [
  { proName: 'laptop-1', proPrice: 1000 },
  { proName: 'laptop-2', proPrice: 2000 },
  { proName: 'laptop-3', proPrice: 3000 },
]

//ES6
let proPriceMap2 = product33.map((data) => data.proPrice)
// console.log(proPriceMap2)

///////////////////////////////////////

//argument Fonksiyona gelene dataların hepsini almak için kullanıyoruz
const argumentData = function () {
  console.log(arguments)
}
// argumentData(5,6,3,9,"Veri");
//////////////////////////////////////////////////////////////////////////////
//ES5
//Class
var Stu = function (adi, soyadi, yas) {
  //constructor
  this.adi = adi
  this.soyadi = soyadi
  this.yas = yas
  console.log(this)
}
//var sonuc = new Stu('Hamit', 'Mızrak', 37)
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ES6 
//class
// class PersonEs6 {

//   //parametreli constructor
//   constructor(adi="adını girmediniz", soyadi="soyadını girmediniz", yas=0) {
//     this.adi = adi
//     this.soyadi = soyadi
//     this.yas = yas
//     console.log('constructor çalıştı')
//   }

//   //metot
//   message(data){
//    return `message: ${data} : adı: ${adi}`
//   }
// }
// // let sonuc2 = new classEs6()
// let sonuc2 = new PersonEs6('Hamit', 'Mızrak', 37);
// console.log(sonuc2)
// console.log(sonuc2.message("Big Data 2556"))
// console.log("**************************************************************************************")

// //extends (tamamen super classtan gelen dataları kullanmak)
// class Teacher extends PersonEs6{}
// let sonuc3= new Teacher('Teacher Name', 'Teacher Surname', 37);
// console.log(sonuc3)

// //extends (kendimize ait özellik ekleyelim)
// class Teacher2 extends PersonEs6{
//   constructor(adi="adını girmediniz", soyadi="soyadını girmediniz", yas=0,hescode="hesCodes4521xc"){
//     super(adi,soyadi,yas);//üst atadan gelen özellikler
//     this.hescode=hescode; // yeni edindiği özellik
//   }

//   dataChangeExtends(data){
//     return `data: ${data} Adı:${adi}  Soyadı:${soyadi}  Yaş:${this.yas}  HesCode:${this.hescode} `
//   }
  
// }
// let sonuc4= new Teacher2('Teacher Name4', 'Teacher Surnam', 34,"HesCodeXYZ4");
// console.log(sonuc4)
// console.log(sonuc2.dataChangeExtends)

////////////////////////////////////////////////////////////////////////////////////////////////////////

//destructuring

//callback()  ==> ES5
//promise()   ==> ES6
//async/await ==> ES7

//Browser sessionscope
//browser localstorage

////////////////////////////////////////////////////////////////////////////////////////////////////////
//ES6
//class
// class Teacher{

//   //constructor
//   constructor(){}

//   //metot
//   deneme(){}
// }

class Teacher{
  //constructor
  constructor(adi="default adi",soyadi="default soyadi"){
    this.adi=adi;
    this.soyadi=soyadi;
   // console.log("ilk constructor çalıştı");
  }

  //metot
  fullName(data){
    return `adi: ${this.adi} soyadi: ${this.adi }`
  }
}

//2.class
class TeacherRoom extends Teacher {}

//3.class
class TeacherSpecialRoom extends Teacher {
  constructor(adi="default adi",soyadi="default soyadi",okulKodu="Xyx126558"){
    super(adi,soyadi);
    this.okulKodu=okulKodu;
   // console.log("XYz>ilk constructor çalıştı");
  }
}

// let teachInstance=new Teacher();
let teachInstance=new Teacher("Hamit","Mızrak");
//console.log(teachInstance);

let teachRoomInstance=new TeacherRoom("Hamit","Mızrak");
//console.log(teachRoomInstance);

let teachRoomSpecialInstance=new TeacherSpecialRoom("Hamit","Mızrak","mnp5263");
//console.log(teachRoomSpecialInstance);



/////////////////////////////////////////////////////////////////////////////
//rest parameter: Aslında dizidir

//normal
function normalFunction(x,y){
  return x+y;
  }
//console.log(normalFunction(1,2,3,4));

//rest-1
function restFunction(x,y,...data){
  console.log(data)
  console.log(x+y+data[0]+data[1]+data[2])
}
//restFunction(1,2,3,4,5)

//rest-2
function restFunction2(...data){
  let sum=0;
  for(let temp of data){
    sum+=temp;
  }
  return sum;
}

//console.log(restFunction2(1,2,3,4,5,6,7,8,9,10))


/////////////////////////////////////////////////////////////////////////////
//destructuring(şeklini bozmak) AMAÇ: daha okunabilir clean kodlar yazmak

//destructuring assigment ==> []=[];   ==> ({}={})
//normal
let x,y,z;
x=1;
y=2;
z=3;
console.log(x,y,z);

//1.YOL
[x,y,z]=[4,5,6];
console.log(x,y,z);

//2.YOL
({x,y,z}={x:7,y:8,z:9})
console.log(x,y,z);

//destructuring array const []=diziAdi
const portData=["8080","5500","3306","5432"];

//1.YOL
const localhost=portData[0]; 
const liveServer=portData[1];
const mysql=portData[2];
const postgresql=portData[3];

console.log(
  `
  localhost: ${localhost}  
  live-server: ${liveServer}  
  mysql: ${mysql}  
  postgresql: ${postgresql}  
  `
  )

//2.YOL
const [localhost2,liveServer2,mysql2,postgresql2]=portData;
console.log(
  `
  localhost: ${localhost2}  
  live-server: ${liveServer2}  
  mysql: ${mysql2}  
  postgresql: ${postgresql2}  
  `
  )

//destructuring object  ==> const {}=objectAdi
//normal
let person44={
  adi1:"Hamit",
  soyadi1:"Mızrak",
  meslek1:"BM"
};
console.log(person44)
console.log(person44.adi1)
console.log(person44.soyadi1)
console.log(person44.meslek1)

const {adi1,soyadi1,meslek1}=person44;
console.log(adi1+" "+soyadi1,meslek1)




