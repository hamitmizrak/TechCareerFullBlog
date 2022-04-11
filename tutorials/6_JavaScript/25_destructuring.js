//destructuring assigment (şeklini bozma)

var x, y, restParameter;

//1.YOL
x = 5;
y = 10;
console.log(x + " " + y + " normal: " + (x + y));

//2.YOL
[x, y] = [5, 20];
console.log("1.yol destructuring:" + x + " " + y + "  " + (x + y));

//2.YOL
({ x, y } = { x: 15, y: 25 });
console.log("2.yol destructuring: " + x + " " + y + (x + y));

[x, y, ...restParameter] = [5, 20, 2, 5];
console.log(
  "destructuring destructuring: " +
    x +
    " " +
    y +
    " sonuc: " +
    (x + y + restParameter[0])
);
////////////////////////////////////////////////////////////////////

//destructuring DİZİLER  (şeklini bozma)
const serverConfigDizi = ["localhost", "3000", "8080"];

//ES5
const server1 = serverConfigDizi[0];
const visualPort1 = serverConfigDizi[1];
const localPort1 = serverConfigDizi[2];
console.log(server1, visualPort1, localPort1);

//ES6
const [server2, visualPort2, localPort2] = serverConfigDizi;
console.log(server2, visualPort2, localPort2);

////////////////////////////////////////////////////////////////////////

//destructuring OBJECT  (şeklini bozma)
const serverConfigObject = {
  server3: "localhost",
  visualPort3: "3000",
  localPort3: "8080",
};


console.log(
  " object " + serverConfigObject.server3,
  serverConfigObject.visualPort3,
  serverConfigObject.localPort3
);


const { server3, visualPort3, localPort3 } = serverConfigObject;
console.log(server3 + " " + visualPort3 + " " + localPort3);

//Special data
let { localPort3: temp } = serverConfigObject;
console.log(temp);
