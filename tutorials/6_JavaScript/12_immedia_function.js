//immedia function: sayfa açıldığında bir kere çalışsın sürekli çalışmasın olan fonkisyonlara denir.

//()();
//(function(){})();
//anonymous function: isimsiz sadece bir kere çalışcak sonra bu fonkisyon bana lazım değil
(function () {
  console.log("Sürekli çalışmam bu sayfa açıldığında bir kere çalışırım");
})();


(function (fullName) {
  console.log("Sürekli çalışmam bu sayfa açıldığında bir kere çalışırım "+fullName);
})('Hamit Mızrak');
