"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

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
  var pro = Number(prompt('Lütfen bir sayı giriniz'));

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
  console.log('ES5');
}; //+++++++++++++++
//DİZİ ==> Map , Filter ,forEach


var product = [{
  productName: 'Msi1',
  productPrice: 1000
}, {
  productName: 'Msi2',
  productPrice: 2000
}, {
  productName: 'Msi3',
  productPrice: 3000
}, {
  productName: 'Msi4',
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
  name: 'Hamit',
  surname: 'Mızrak',
  java: ['servlet', 'Jsp', 'JSF', 'Spring MVC', 'Spring Data', 'Spring Security'],
  getJava: function getJava() {
    console.log('dışardan çağırdım ' + this.name);
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
//arrow function ()=>{}
//Immedia function (anonymous(){})()
//ES6 (1) Variable ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(let-const)
//  var adi="Hamit";
//  let adi2="Hamit";
//  const adi4="Ankara";
//global scope

var adi = 'Hamit'; //Function scope

function fullName() {
  var adi = 'Hamit444';
  var soyadi = 'Mızrak';
  console.log('function scope: ' + ' adi: ' + adi + ' soyadı: ' + soyadi);
} // fullName();
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


var deneme = 'Merhabalar\nNasılsınız'; // console.log(deneme)

var deneme2 = "Merhabalar\nNas\u0131ls\u0131n\u0131z\nJS Kursu\n"; // console.log(deneme2)
// 2.6 GHZ: 2.6 Milyar toplama
//2-) Interpolation
// let firstName=`Malatya`;
// let lastName=`Battalgazi`;
// console.log("İl: "+firstName+ " İlçe:"+lastName)
// console.log(`İl: ${firstName} İlçe: ${lastName}`)

console.log('*******************************************');
var student = {
  name: 'Hamit',
  surname: 'Mızrak'
}; // console.log(student.surname)
// console.log(`${student.surname}`)
//ES6 (3) Function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//(Parametresiz Function)
//Normal

function deneme11() {
  console.log('Normal Function');
} // deneme11()
//ES5


var deneme22 = function deneme22() {
  console.log('Anonymous Function');
}; // deneme22()
//ES6


var deneme33 = function deneme33() {
  console.log('Arrow Function');
}; // deneme33()
// console.log("************************************************")
//(Parametreli Function)
//Normal Parametreli


function deneme44(adi) {
  console.log('Normal Parametreli Function', adi);
} // deneme44("Kayısı")
//Anonymous Parametreli


var deneme55 = function deneme55(adi) {
  console.log('Anonymous Function ', adi);
}; // deneme55("Kayısı Reçeli")
//Arrow Function Parametre
//eğer curl brackets kullanmazsak return kullanmamıza gerek yok


var deneme66 = function deneme66(x, y) {
  return x + y;
};

var value66 = deneme66(6, 4); // console.log(value66)
//examples
//benim gönderdiğim veriyi Büyültsün

var upperValue = function upperValue(data) {
  return data.toUpperCase();
}; // console.log(upperValue("Kızılay"))
//eğer curl brackets yazarsam  return kullanalım


var deneme77 = function deneme77(x, y) {
  return x + y;
};

var value77 = deneme77(6, 4); // console.log(value77)
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

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // console.log(arr)
// //Filter ES5 -ES6
// let es5Filter=arr.filter();
// //Filter ES5

var es5Filter44 = arr.filter(function (data) {
  return data % 2 == 1;
}); // console.log(es5Filter44);
// //Filter ES6

var filterEs6 = arr.filter(function (data) {
  return data % 2 == 0;
}); // console.log(filterEs6);
//////////

var product33 = [{
  proName: 'laptop-1',
  proPrice: 1000
}, {
  proName: 'laptop-2',
  proPrice: 2000
}, {
  proName: 'laptop-3',
  proPrice: 3000
}]; //ES6

var proPriceMap2 = product33.map(function (data) {
  return data.proPrice;
}); // console.log(proPriceMap2)
///////////////////////////////////////
//argument Fonksiyona gelene dataların hepsini almak için kullanıyoruz

var argumentData = function argumentData() {
  console.log(arguments);
}; // argumentData(5,6,3,9,"Veri");
//////////////////////////////////////////////////////////////////////////////
//ES5
//Class


var Stu = function Stu(adi, soyadi, yas) {
  //constructor
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
  console.log(this);
}; //var sonuc = new Stu('Hamit', 'Mızrak', 37)
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


var Teacher = /*#__PURE__*/function () {
  //constructor
  function Teacher() {
    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default adi";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default soyadi";

    _classCallCheck(this, Teacher);

    this.adi = adi;
    this.soyadi = soyadi; // console.log("ilk constructor çalıştı");
  } //metot


  _createClass(Teacher, [{
    key: "fullName",
    value: function fullName(data) {
      return "adi: ".concat(this.adi, " soyadi: ").concat(this.adi);
    }
  }]);

  return Teacher;
}(); //2.class


var TeacherRoom = /*#__PURE__*/function (_Teacher) {
  _inherits(TeacherRoom, _Teacher);

  var _super = _createSuper(TeacherRoom);

  function TeacherRoom() {
    _classCallCheck(this, TeacherRoom);

    return _super.apply(this, arguments);
  }

  return _createClass(TeacherRoom);
}(Teacher); //3.class


var TeacherSpecialRoom = /*#__PURE__*/function (_Teacher2) {
  _inherits(TeacherSpecialRoom, _Teacher2);

  var _super2 = _createSuper(TeacherSpecialRoom);

  function TeacherSpecialRoom() {
    var _this;

    var adi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "default adi";
    var soyadi = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "default soyadi";
    var okulKodu = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Xyx126558";

    _classCallCheck(this, TeacherSpecialRoom);

    _this = _super2.call(this, adi, soyadi);
    _this.okulKodu = okulKodu; // console.log("XYz>ilk constructor çalıştı");

    return _this;
  }

  return _createClass(TeacherSpecialRoom);
}(Teacher); // let teachInstance=new Teacher();


var teachInstance = new Teacher("Hamit", "Mızrak"); //console.log(teachInstance);

var teachRoomInstance = new TeacherRoom("Hamit", "Mızrak"); //console.log(teachRoomInstance);

var teachRoomSpecialInstance = new TeacherSpecialRoom("Hamit", "Mızrak", "mnp5263"); //console.log(teachRoomSpecialInstance);
/////////////////////////////////////////////////////////////////////////////
//rest parameter: Aslında dizidir
//normal

function normalFunction(x, y) {
  return x + y;
} //console.log(normalFunction(1,2,3,4));
//rest-1


function restFunction(x, y) {
  for (var _len = arguments.length, data = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    data[_key - 2] = arguments[_key];
  }

  console.log(data);
  console.log(x + y + data[0] + data[1] + data[2]);
} //restFunction(1,2,3,4,5)
//rest-2


function restFunction2() {
  var sum = 0;

  for (var _len2 = arguments.length, data = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    data[_key2] = arguments[_key2];
  }

  for (var _i = 0, _data = data; _i < _data.length; _i++) {
    var temp = _data[_i];
    sum += temp;
  }

  return sum;
} //console.log(restFunction2(1,2,3,4,5,6,7,8,9,10))
/////////////////////////////////////////////////////////////////////////////
//destructuring(şeklini bozmak) AMAÇ: daha okunabilir clean kodlar yazmak
//destructuring assigment ==> []=[];   ==> ({}={})
//normal


var x, y, z;
x = 1;
y = 2;
z = 3;
console.log(x, y, z); //1.YOL

x = 4;
y = 5;
z = 6;
console.log(x, y, z); //2.YOL

var _x$y$z = {
  x: 7,
  y: 8,
  z: 9
};
x = _x$y$z.x;
y = _x$y$z.y;
z = _x$y$z.z;
console.log(x, y, z); //destructuring array const []=diziAdi

var portData = ["8080", "5500", "3306", "5432"]; //1.YOL

var localhost = portData[0];
var liveServer = portData[1];
var mysql = portData[2];
var postgresql = portData[3];
console.log("\n  localhost: ".concat(localhost, "  \n  live-server: ").concat(liveServer, "  \n  mysql: ").concat(mysql, "  \n  postgresql: ").concat(postgresql, "  \n  ")); //2.YOL

var localhost2 = portData[0],
    liveServer2 = portData[1],
    mysql2 = portData[2],
    postgresql2 = portData[3];
console.log("\n  localhost: ".concat(localhost2, "  \n  live-server: ").concat(liveServer2, "  \n  mysql: ").concat(mysql2, "  \n  postgresql: ").concat(postgresql2, "  \n  ")); //destructuring object  ==> const {}=objectAdi
//normal

var person44 = {
  adi1: "Hamit",
  soyadi1: "Mızrak",
  meslek1: "BM"
};
console.log(person44);
console.log(person44.adi1);
console.log(person44.soyadi1);
console.log(person44.meslek1);
var adi1 = person44.adi1,
    soyadi1 = person44.soyadi1,
    meslek1 = person44.meslek1;
console.log(adi1 + " " + soyadi1, meslek1);
