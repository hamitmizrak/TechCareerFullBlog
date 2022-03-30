"use strict";

//root
var root = document.getElementById("root"); //++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Hoisting: değişkeni sona yazıyoruz.

deneme = "Merhabalar";
var deneme; //global scope
//  var globalScope="global değişken";
//  let globalFunction=(p1)=>{
// p1+=globalScope;
// console.log(p1)
//  }
//local scope (FunctionScope)
//  let functionScope=(p1)=>{
// var localScope="global değişken";
// p1+=localScope;
// console.log(p1)
//  }
//  functionScope("Nasılsın");
//  console.log(localScope)
//++++ var , let ,const
//VAR:aynı değişken isminden yazabiliriz
//var
//LET: aynı değişken isminden yazamayız
//let
//const
//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//Template Literal 

var number1 = "Number1";
var templateLiteralMultiLine = "template literal \nmulti-line";
var templateLiteralInterpolation = "Ad\u0131m: ".concat(number1); //++++++++++++++++++++++++++++++++++++++++++++++++++++++
//WWW=World Wide Web
//ESMASCIPT:ECMA international tarafından standartlaştırılmış bir betik dilidir.
//Js standart olması için kuruldu
//TypeScript: Microsoft geliştiriyor , açık kaynaklı JavaScript'in bir üst kümesidir.
//JavaScript'in tüm özelliklerini içerir
//ts uzantıldır
//ts hata denetimi vardır
//Sınıf tabanlı objeler oluşturabiliriz.
//interface,abstract,inheritance
//TS data type: String, Number, Boolean,static,class Array, Enum, Tuple, generics'
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

var deneme55 = {};
console.log(deneme55); //constructor

var Student = function Student(adi, soyadi, yas) {
  this.adi = adi;
  this.soyadi = soyadi;
  this.yas = yas;
  console.log(this);
}; //instance (new)


var instanceValue = new Student("Hamit", "Mızrak", 37); //hasOwnProperty: buradaki değer constructrudaki eleman mı ?

console.log(instanceValue.hasOwnProperty("soyadi")); //prototype
//Student.prototype.
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//  var variable1,variable2,variable3,variable4;
//  variable1="Html5";
//  variable2="Css3";
//  variable3="JS";
//  variable4="React";

var object = {
  variable1: "Html5",
  variable2: "Css3",
  variable3: "JS",
  variable4: "React"
}; //react yorumlama {}
//react class => className
//template

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Ba\u015Fl\u0131k"), /*#__PURE__*/React.createElement("p", {
  className: "text-danger"
}, "Lorem ipsum dolor sit amet."), /*#__PURE__*/React.createElement("ul", {
  className: "list-group"
}, /*#__PURE__*/React.createElement("li", {
  className: "list-group-item active"
}, object.variable1), /*#__PURE__*/React.createElement("li", {
  className: "list-group-item"
}, object.variable2), /*#__PURE__*/React.createElement("li", {
  className: "list-group-item "
}, object.variable3), /*#__PURE__*/React.createElement("li", {
  className: "list-group-item "
}, object.variable4))); //++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ReactDOM

ReactDOM.render(template, root);
