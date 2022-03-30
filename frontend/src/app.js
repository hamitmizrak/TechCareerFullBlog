 
 //root
 var root = document.getElementById("root");
 
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
 

//ReactDOM
 ReactDOM.render(template, root);