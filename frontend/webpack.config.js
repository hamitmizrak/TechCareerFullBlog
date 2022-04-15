const path=require("path");

module.exports={
    entry: './src/index.js', //başlangıç dosyamız birden fazla dosya olabiliri
    output:{
        path:path.resolve(__dirname,'dist'), //ana dizinde public altında bundle.js olussun
        filename:'bundle.js'
    }

}