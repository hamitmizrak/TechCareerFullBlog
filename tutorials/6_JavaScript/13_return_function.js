//immedia function: sayfa açıldığında bir kere çalışsın sürekli çalışmasın olan fonkisyonlara denir.

//()();
//(function(){})();
//anonymous function: isimsiz sadece bir kere çalışcak sonra bu fonkisyon bana lazım değil

function whoISNumber(sayi) {
  switch (sayi) {
    case 1:
      return function () {
        console.log("1 sayısı geldi");
      };
      break;

      case 2:
        return function () {
          console.log("2 sayısı geldi");
        };

    default:
      console.log("yok")
      break;
  }
}

let result=whoISNumber(1);
result()
