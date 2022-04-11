//spread: metoda dizi göndermek

function getDizi(x,y,z){

  return x+y+z
}

console.log(getDizi(5,10,15));

let diziPush=[5,10,15];

//ES5 metoda dizi gönder
console.log("es5: "+getDizi.apply(null,diziPush))

//ES6
console.log("es6: "+getDizi(...diziPush));