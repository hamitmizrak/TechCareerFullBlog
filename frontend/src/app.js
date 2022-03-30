 
 //root
 var root = document.getElementById("root");

 //++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //Hoisting: değişkeni sona yazıyoruz.
 deneme="Merhabalar";
 let deneme;

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
let number1="Number1";
let templateLiteralMultiLine=`template literal 
multi-line`;

let templateLiteralInterpolation=`Adım: ${number1}`;


 
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




 
//  var variable1,variable2,variable3,variable4;
//  variable1="Html5";
//  variable2="Css3";
//  variable3="JS";
//  variable4="React";
var object={
variable1:"Html5",
variable2:"Css3",
variable3:"JS",
variable4:"React",
}

 //react yorumlama {}
 //react class => className

 //template
 var template =
 (
<div>
     <h1>Başlık</h1>
     <p className="text-danger">Lorem ipsum dolor sit amet.</p>
     <ul className="list-group">
         {/* JSX Expression */}
         <li className="list-group-item active">{object.variable1}</li>
         <li className="list-group-item">{object.variable2}</li>
         <li className="list-group-item ">{object.variable3}</li>
         <li className="list-group-item ">{object.variable4}</li>
     </ul>
 </div>
 );
 
 //++++++++++++++++++++++++++++++++++++++++++++++++++++++
//ReactDOM
 ReactDOM.render(template, root);