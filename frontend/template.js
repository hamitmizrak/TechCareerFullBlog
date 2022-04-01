"use strict";

// $("").
//modal active
$(function () {
  $('#btn_giris').click(function () {
    $('#myUye').modal('show');
  });
  $('#deneme44').css('color', 'red').css('background', 'black');

  function onSubmitFunction() {
    alert("submitted value 44");
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
//root

var root = document.getElementById("root"); //++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Hoisting: değişkeni sona yazıyoruz.
//  deneme="Merhabalar";
//  let deneme;
//global scope
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
// let number1="Number1";
// let templateLiteralMultiLine=`template literal 
// multi-line`;
// let templateLiteralInterpolation=`Adım: ${number1}`;
//++++++++++++++++++++++++++++++++++++++++++++++++++++++
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
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//  var variable1,variable2,variable3,variable4;
//  variable1="Html5";
//  variable2="Css3";
//  variable3="JS";
//  variable4="React";
// var object={
// variable1:"Html5",
// variable2:"Css3",
// variable3:"JS",
// variable4:"React",
// }
//react yorumlama {}
//react class => className
//template
//  var template =
//  (
// <div>
//      <h1>Başlık</h1>
//      <p className="text-danger">Lorem ipsum dolor sit amet.</p>
//      <ul className="list-group">
//          {/* JSX Expression */}
//          <li className="list-group-item active">{object.variable1}</li>
//          <li className="list-group-item">{object.variable2}</li>
//          <li className="list-group-item ">{object.variable3}</li>
//          <li className="list-group-item ">{object.variable4}</li>
//      </ul>
//  </div>
//  );
//  //++++++++++++++++++++++++++++++++++++++++++++++++++++++
// //ReactDOM
//  ReactDOM.render(template, root);
/////Object
// var deneme55={};
// console.log(deneme55)
// //constructor
// let Student=function StudentFunction(adi,soyadi,yas){
// this.adi=adi;
// this.soyadi=soyadi;
// this.yas=yas;
// console.log(this);
// }
// //instance (new)
// var instanceValue= new Student("Hamit","Mızrak",37);
// //hasOwnProperty: buradaki değer constructrudaki eleman mı ?
// console.log(instanceValue.hasOwnProperty("soyadi"));
// //prototype (Kalıtımladım)
// Student.prototype.birtDay=function(){
//    return 2022-this.yas;
// }
// console.log("doğum tarihi: "+instanceValue.birtDay())
// //object create
// var instanceValue2=Object.create(Student);
// console.log(instanceValue2);
// instanceValue2.meslek="Bilgisayar Mühendisi";
// console.log(instanceValue2);
// //built-in Constructor --> yeni özellikler ekleme (String veya Array)
// String.prototype.kendiFunctionimKare=function(data){
//    alert(Math.pow(data,2))
// return Math.pow(data,2);
// }
// console.log("deneme".kendiFunctionimKare(4));
//Callbackfunction
//promise
//call aply bind
