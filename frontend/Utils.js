//Download: => https://nodejs.org/en/
// node -v     ==> v16.14.2

// NPM +++++++++++++++++++++++++++++++++++++++++++++++++++
// npm  -v     ==> v8.5.0
// npm update
// npm list (local project)

// npm bin -g  ==> npm yüklenecek dizin url (C:\usr\local)
// npm list -g --depth 0 (npm yüklü olduğu dizindeki listelemek)
// npm list -g --depth=0

//npm init -y (package.json)


// local packet
// npm install <package>
// npm i <package>
// npm up <package> 
// npm un <package> 

//global packet (yani bilgisayarınızın her yerinden bu alana erişmek) ==> -g
// npm install -g <package>

////////////////////////////////////
//live-server ++++++++++++++++++++++++
// npm bin -g (C:\usr\local) 
// npm list -g --depth=0
// npm install -g live-server
// npm install (package.json'deki dependency içeriğine göre tekrardan yükler)
// npm config set prefix/usr/local (aman dikkat ==> bu kod npm setller )
// live-server public


//////////////////////////////////
// React içeriğinde Emmet özelliğini aktif etmek içindir.
// Manage ==> setting.json
// "emmet.includeLanguages": {
//     "javascript": "javascriptreact"
//   },

//////////////////////////////////
//REACT
// <!-- react CDN -->
// <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

// <script>
//     var template = React.createElement("h3", null, "babel olmadan yazıldı");
//     var root = document.getElementById("root");
//     ReactDOM.render(template, root);
// </script>

//////////////////////////////////////////////////////////////////////////////////////////////////
// BABEL
// npm install --save-dev @babel/core @babel/cli (save-dev: projenin bir parçası olmasını sağlamak)
// SÜRÜM DEĞİŞTİMEK İSTERSEK KULLANALIM  npm install --save-dev @babel/core@7.17.1 @babel/cli@7.17.2
// npm install --save-dev @babel/preset-env
// npm install --save-dev @babel/preset-react

//npx babel --help
//npx babel src/app.js  --out-file=public/app.js
//npx babel src/app.js  --out-file=public/app.js --watch


//automatic live-server and babel
//PACKAGE.JSON
// "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start" :"live-server public" ,
//     "babel" :"npx babel src/app.js --out-file=public/app.js --watch"
//   },

//teminali kapatmak istersek ==> Ctrl+c
//npm run  babel
//npm run start


