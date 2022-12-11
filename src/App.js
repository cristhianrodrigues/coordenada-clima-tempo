import React, { useState, useEffect, Fragment } from 'react';
import { GlobalStyles } from './styles/styles.js';
import LocalizacaoNegada from './components/LocalizacaoNegada.js';
import InfoClima from './components/InfoClima.js';

const API_KEY_01 = process.env.REACT_APP_API_KEY_01;

export default function App() {

  const [ lati, setLati ] = useState();
  const [ long, setLong ] = useState();
  const [ localizacao, setLocalizacao ] = useState(false);
  const [ localCidade, setLocalCidade ] = useState({ geocodeCidade:'' });
  const [ temperatura, setTemperatura ] = useState({ temperatura:'', cidade:'', tempo:'', vento:'', sensaçãoTermica:'', umidade:'' });

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((position) => {

      setLati(position.coords.latitude);
      setLong(position.coords.longitude);
      setLocalizacao(true);

    });

  }, []);

  useEffect(() => {

    async function fetchDataGeocodeApi() {

      const response = await fetch(`https://geocode.xyz/${lati},${long}?json=1`);
      const data = await response.json();

      setLocalCidade({

        geocodeCidade: data.city
        
      });

    }

    fetchDataGeocodeApi();

}, [lati, long]);

 useEffect (() => {

  async function fetchDataOpenweathermapApi() {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localCidade.geocodeCidade}&lang=pt_br&units=metric&appid=${API_KEY_01}&mode=json`);
    const data = await response.json();

    setTemperatura({

      temperatura: data.main.temp.toFixed(),
      cidade: data.name,
      tempo: data.weather[0].description,
      vento: data.wind.speed,
      sensaçãoTermica: data.main.feels_like.toFixed(),
      umidade: data.main.humidity
      
    });

  };

  fetchDataOpenweathermapApi();

 }, [lati, long, localCidade]);

  if (localizacao === false){

    return(

      <Fragment>
        <GlobalStyles />
        <LocalizacaoNegada />
      </Fragment>

    );

  }else{

    return(

      <Fragment>
        <GlobalStyles />
        <InfoClima 
          dadosTemperatura={temperatura}
        />
      </Fragment>
      
    );

  };

};