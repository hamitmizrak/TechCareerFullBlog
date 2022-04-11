//error handling

try {
  console.log(deneme());
} catch (error) {
  console.log(error); //bütün hata
  console.log(error.message); //hata mesajı
  console.log(error.name); //hata adı
  console.log(error instanceof ReferenceError )
  console.log(typeof error  ) //hata
}finally{
  console.log("Burası mutlaka çalışacak")
}


try {
  let sayi=4;
   if(sayi==4){
     throw new ReferenceError("yanlış")
   }
} catch (error) {
  console.log(error); //bütün hata
}
