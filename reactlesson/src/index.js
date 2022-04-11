import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderFunction from './HeaderFunction';
import MainBodyClass from './MainBodyClass';
import FooterFunction from './FooterFunction';

let objectData={
   main:"Main bilgisi",
   computerName:"com52Xy" ,
   computerTrade:"Marka" ,
   computerPrice:"12"
};

ReactDOM.render(
  <React.StrictMode>
    <HeaderFunction head="header bilgisi"/>
    <MainBodyClass  main={objectData.main} computerName={objectData.computerName}  computerTrade={objectData.computerTrade}  computerPrice={objectData.computerPrice} />
    <FooterFunction foot="footer bilgisi"/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
