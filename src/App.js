import React, { useState, useEffect, Fragment } from 'react';
import { GlobalStyles } from './styles/styles.js';
import LocalizacaoNegada from './components/LocalizacaoNegada.js';
import RunGeocodeApi from './components/RunGeocodeApi.js';
import RunWeatherApi from './components/RunWeatherApi.js';
import InfoClima from './components/InfoClima.js';


export default function App() {

  const [ lati, setLati ] = useState();
  const [ long, setLong ] = useState();
  const [ localizacao, setLocalizacao ] = useState(false);
  const [ cidade, setCidade ] = useState('');
  const [ temperatura, setTemperatura ] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLati(position.coords.latitude);
      setLong(position.coords.longitude);
      setLocalizacao(true);
    });
  }, []);

  const pegarCidade = (geocodeApiData) => {
    setCidade(geocodeApiData);
  };

  const pegarTemperatura = (weatherApiData) => {
    setTemperatura(weatherApiData);
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
        <RunGeocodeApi
          latitude={lati}
          longitude={long}
          pegarCidade={pegarCidade}
        />
        <RunWeatherApi
          cidade={cidade}
          pegarTemperatura={pegarTemperatura}
        />
        <InfoClima 
          dadosTemperatura={temperatura}
        />
      </Fragment>
    );
  };
};