"use strict";

//root
var root = document.getElementById("root"); //  var variable1,variable2,variable3,variable4;
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
}, object.variable4))); //ReactDOM

ReactDOM.render(template, root);
