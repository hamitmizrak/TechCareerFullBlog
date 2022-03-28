/* 
JQUERY
2006 John Resig geliştiriliyor
JavaScript Kütüphanesidir.
Programlama dili değildir.
Az Kod çok iş mantığına sahiptir.
Ajax yazmak  kolaydır.
DOM manipülasyonları yazma maliyeti daha düşüktür.
*/

//Document.ready
$(function () {
  // JS DOM
  //document.getElementById("jquery_id").innerHTML="<b>jquery buradaydı</b>";

  // JQUERY
  //HTML
  $('#jquery_id').html('<b> <i>jquery buradaydı </i> </b>')
  $('#jquery_id2').text('<b> <i>jquery buradaydı </i> </b>')

  

  //CSS
  $('#jquery_id')
    .css('background-color', 'red')
    .css('color', 'blue')
    .css('padding', '25px')

  //pseudo element
  $('p:contains(html)').css('box-shadow', '1px 1px 2px 5px rgba(2,2,2,.8')

  $("ul li:not(':contains(css 3)')")
    .css('color', 'blue')
    .css('background', 'black')

  //CSS inline Object
  //   $('#deneme44').css().css().css();
  //  Tırnaksız ==> backgroundColor
  //  Tırnaklı ==> background-color
  $('#deneme44').css({ color: 'yellow', backgroundColor: 'green' });

   //CSS Object
  let objectCss={
      "font-size":"65px",
      "color":"red",
      "background":"orange"
  }
  $('#deneme33').css(objectCss);

  $('img').attr("src");
  $('img').click(function ())

})

//toggleClass(),attr(),removeAttr(),val(),hide(),show(),fade(),slide(),animate(),stop()