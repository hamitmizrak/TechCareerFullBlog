import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import reportWebVitals from './reportWebVitals'
import 'bootstrap/dist/css/bootstrap.min.css'
// import HeaderFunction from './HeaderFunction';
// import MainBodyClass from './MainBodyClass';
// import FooterFunction from './FooterFunction';
//import EventStringifyParse from './EventStringifyParse';
// import EventBind from './EventBind';
// import FormBind from './FormBind'
import StateClass2 from './StateClass2'

// let objectData={
//    main:"Main bilgisi",
//    computerName:"com52Xy" ,
//    computerTrade:"Marka" ,
//    computerPrice:"12",
//    mainData:"Javascript",
//    classData:"ES6"
// };

ReactDOM.render(
  <React.StrictMode>
    {/* <FormBind /> */}
    <StateClass2 dataChange="Datalarım geldi"/>
    {/* <EventBind language="js java html5" /> */}
    {/* <EventStringifyParse header={objectData.mainData} classData={objectData.classData} />
     <HeaderFunction head="header bilgisi"/>
    <MainBodyClass  main={objectData.main} computerName={objectData.computerName}  computerTrade={objectData.computerTrade}  computerPrice={objectData.computerPrice} />
    <FooterFunction foot="footer bilgisi"/> */}
  </React.StrictMode>,
  document.getElementById('root'),
)

reportWebVitals()
