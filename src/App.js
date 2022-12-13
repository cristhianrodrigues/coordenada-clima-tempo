import React, { useState, useEffect, Fragment } from 'react';
import { GlobalStyles } from './styles/styles.js';
import LocalizacaoNegada from './components/LocalizacaoNegada.js';
import RunWeatherApi from './components/RunWeatherApi.js';
import InfoClima from './components/InfoClima.js';


export default function App() {

  const [ lati, setLati ] = useState();
  const [ long, setLong ] = useState();
  const [ localizacao, setLocalizacao ] = useState(false);
  const [ temperatura, setTemperatura ] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLati(position.coords.latitude);
      setLong(position.coords.longitude);
      setLocalizacao(true);
    });
  }, []);

  const pegarTemperatura = (runWeatherApiData) => {
    setTemperatura(runWeatherApiData)
  };


  if (localizacao === false){
    return(
      <Fragment>
        <GlobalStyles />
        <LocalizacaoNegada />
      </Fragment>
    )
  }else{
    return(
      <Fragment>
        <GlobalStyles />
        <RunWeatherApi 
          latitude={lati}
          longitude={long}
          pegarTemperatura={pegarTemperatura}
        />
        <InfoClima 
          dadosTemperatura={temperatura}
        />
      </Fragment>
    );
  };
};