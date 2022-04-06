"use strict";

// $("").
//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show');
  });
  $('#deneme44').css('color', 'red').css('background', 'black');

  function onSubmitFunction() {
    alert('submitted value 44');
  }
}); //form validation

$(function () {
  //Submit  Tıklandığında
  $('#btnSubmit').click(function () {
    //input içeriği aldım
    var email, password;
    email = $('#user_email').val();
    password = $('#user_password').val(); //validation Email

    if (email == '') {
      $('#validation_email').html('email boş geçilemez....');
    } else if (validateEmail(email) == false) {
      $('#validation_email').html('email uygun formatta girmediniz....');
    } else {
      $('#validation_email').html('');
    } //validation Password


    if (password == '') {
      $('#validation_password').html('Şifre boş geçilemez....');
    } else {
      $('#validation_password').html('');
    }

    function validateEmail(email) {
      var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }
  });
}); //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

var counter = 0; //Artırmak

var counterPlus = function counterPlus() {
  counter++;
  againCall();
  console.log('Artırıldı');
}; //Azaltmak


var counterMinus = function counterMinus() {
  counter--;
  againCall();
  console.log('Azaltıldı');
}; //Event


function againCall() {
  var eventTuto = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-8"
  }, /*#__PURE__*/React.createElement("p", null, "Adet: ", counter)), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterPlus,
    className: "btn btn-primary",
    style: {
      fontSize: '14px'
    },
    id: "plus_id"
  }, "+")), /*#__PURE__*/React.createElement("div", {
    className: "col-md-2"
  }, ' ', /*#__PURE__*/React.createElement("button", {
    onClick: counterMinus,
    className: "btn btn-danger",
    style: {
      fontSize: '14px'
    },
    id: "plus_id"
  }, "-")))));
  ReactDOM.render(eventTuto, document.getElementById('plus_minus'));
}

againCall(); //Timer

function timerClock() {
  var time = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("b", null, " ", new Date().toLocaleTimeString(), " ")));
  ReactDOM.render(time, document.getElementById('timer_id'));
} //bir metodu sürekli belirli aralıklarda çağırmak istersek


setInterval(timerClock, 1000); //TODO LIST
//variable

var listItemObject = {
  title: 'Todo List Uygulaması',
  listCounter: 'Liste Eleman sayısı',
  data: []
}; //LIST CLEAR

var clearList = function clearList() {
  listItemObject.data = [];
  formTutorial();
}; //onSubmit


function formOnSubmit(event) {
  //form bileşenin submit olmaması
  event.preventDefault();
  var formInputData = event.target.elements.formInput.value; //console.log(formInputData);

  if (formInputData) {
    listItemObject.data.push(formInputData);
    formTutorial();
    console.log('Eklendi: ' + formInputData);
    event.target.elements.formInput.value = '';
  }
}

function formTutorial() {
  var form = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", {
    className: "text-center44 text-uppercase mt-5"
  }, listItemObject.title), /*#__PURE__*/React.createElement("p", null, listItemObject.listCounter, " : ", listItemObject.data.length), /*#__PURE__*/React.createElement("ul", null, listItemObject.data.map(function (temp) {
    return /*#__PURE__*/React.createElement("li", {
      key: temp.toString()
    }, " ", temp, " ");
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: formOnSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "form-control",
    name: "formInput"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-warning mr-3",
    style: {
      fontSize: '.6rem'
    },
    type: "submit"
  }, "G\xF6nder"), /*#__PURE__*/React.createElement("button", {
    onClick: clearList,
    className: "btn btn-danger",
    style: {
      fontSize: '.6rem'
    }
  }, "temizle")))));
  ReactDOM.render(form, document.getElementById('todolistId'));
}

formTutorial(); //+++++++++++++++++++++++++++++++
//object

var object = {}; //console.log(object)
//constructor

var Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
  console.log(this);
}; //instance
//hasOwnPropert: Bu objede var mı yok mu ?
//var instanceData = new Student('Adi44', 'Soyadi44', 37)
//console.log(instanceData.hasOwnProperty('soyadi'))
//Object Create


var instanceData2 = Object.create(Student); //console.log(instanceData2)
//property

Student.prototype.birthYear = function () {
  return new Date().getFullYear() - this.yas;
}; //console.log('Adı: ' + instanceData.adi + '  Doğum Tarihi: ' + instanceData.birthYear(),)
//built-in-constructor


String.prototype.karesi = function (n) {
  return n * n;
}; //console.log('X'.karesi(5))
//mutlak değerli kendi String functionımı oluşturualım ?
//mutlakDeger


String.prototype.mutlakDeger = function (n) {
  if (n > 0) return n;else return -n;
}; //console.log('Mutlak'.mutlakDeger(5))
//verilen iki sayının küçük olanın bulsun kucukSayi


String.prototype.kucukSayi = function (x1, x2) {
  if (x1 > x2) return x2;else return x1;
}; //console.log('kucuk'.kucukSayi(-150, 10))
//dizideki elemanlarda silmek
//["js","jquery","bootstrap"]
//diziIndexDelete["bootstrap"]


var dizi = ['js', 'jquery', 'bootstrap']; ////console.log(dizi)
//dizideki elemanı silme

Array.prototype.arrayIndexDelete = function (data) {
  var index = this.indexOf(data);

  if (index > -1) {
    this.splice(index, 1);
  }

  return this;
}; //console.log(dizi.arrayIndexDelete('js'));
//repeat
//console.log(new Array(4+1).join(1));
//String tekrar eden


String.prototype.wordRepetition = function (m) {
  var repeat = new Array(m + 1).join(this);
  return repeat;
}; //console.log("Kelime".concat(" ").wordRepetition(2))
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
  var multiple = x1 * x2;
  callback(multiple);
}

function ikinci(deger) {
  console.log(deger);
} //birinci(4,5,ikinci)
//callback:
//2.örnek
//sıfır(0) başlasun kullanıcıdan alınan sayıya kadar döngüdeki sayılardan çift olanları ekranda gösteren callbackfunction yazalım ?


function evenNumberArray(callback) {
  var evenArray = [];
  var pro = Number(prompt("Lütfen bir sayı giriniz"));

  for (var i = 0; i <= pro; i++) {
    if (i % 2 == 0) {
      evenArray.push(i);
    }
  }

  callback(evenArray);
}

function showMessage(data) {
  console.log(data);
} //evenNumberArray(showMessage);
//callback hell
//Anonymous Function


var es5Anonymous = function es5Anonymous() {
  console.log("ES5");
}; //+++++++++++++++
//DİZİ ==> Map , Filter ,forEach


var product = [{
  productName: "Msi1",
  productPrice: 1000
}, {
  productName: "Msi2",
  productPrice: 2000
}, {
  productName: "Msi3",
  productPrice: 3000
}, {
  productName: "Msi4",
  productPrice: 4000
}]; //console.log(product)
//Map

var es5Map = product.map(function (temp) {
  return temp.productName;
}); //console.log(es5Map)
//Filter

var es5Filter = product.filter(function (temp) {
  return temp.productPrice >= 3000;
}); //console.log(es5Filter)
////////////////
//OBJECT ==> this , forEach

var person = {
  name: "Hamit",
  surname: "Mızrak",
  java: ["servlet", "Jsp", "JSF", "Spring MVC", "Spring Data", "Spring Security"],
  getJava: function getJava() {
    console.log("dışardan çağırdım " + this.name);
    var mecbur = this;
    this.java.forEach(function (temp) {
      console.log(temp);
      console.log(mecbur.name);
    });
  }
}; // person.getJava()
/////////////////////////////////////////////////////////////////////////////////////////
//ES6
//let -const
//template literal ==> ``
//ES6 (1) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(let-const)
//  var adi="Hamit";
//  let adi2="Hamit";
//  const adi4="Ankara";
//global scope

var adi = "Hamit"; //Function scope

function fullName() {
  var adi = "Hamit444";
  var soyadi = "Mızrak";
  console.log("function scope: " + " adi: " + adi + " soyadı: " + soyadi);
} // fullName();
// console.log("global Scope: adi ",adi)
// console.log("function Scope: soyadi ",soyadi);
//conditional Block
// if(true){
//   let yas=37;
//   console.log(yas)
// }
//ES6 (2) ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Template Literal: BackTick ==> ``
//1-) Multi-line
//2-) Interpolation
//3-) Html Templates
//1-) Multi-Line


var deneme = "Merhabalar\nNasılsınız";
console.log(deneme);
var deneme2 = "Merhabalar\nNas\u0131ls\u0131n\u0131z\nJS Kursu\n";
console.log(deneme2); // 2.6 GHZ: 2.6 Milyar toplama
//2-) Interpolation

var firstName = "Malatya";
var lastName = "Battalgazi";
console.log("İl: " + firstName + " İlçe:" + lastName);
console.log("\u0130l: ".concat(firstName, " \u0130l\xE7e: ").concat(lastName));
