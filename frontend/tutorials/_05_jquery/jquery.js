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
$(function (){
    // JS DOM
    //document.getElementById("jquery_id").innerHTML="<b>jquery buradaydı</b>";

    // JQUERY
    //HTML
   $("#jquery_id").html("<b> <i>jquery buradaydı </i> </b>");


   //CSS
   $("#jquery_id").css("background-color","red").css("color","blue").css("padding","25px");
})