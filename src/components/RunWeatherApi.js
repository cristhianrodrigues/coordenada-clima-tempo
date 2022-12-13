import { useState, useEffect } from "react";

const API_KEY_01 = process.env.REACT_APP_API_KEY_01;

export default function RunWeatherApi({latitude, longitude, pegarTemperatura}){

    const [ temperatura, setTemperatura ] = useState({ temperatura:'', cidade:'', tempo:'', vento:'', sensaçãoTermica:'', umidade:'' });

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=pt_br&units=metric&appid=${API_KEY_01}&mode=json`)
            .then(response => response.json())
            .then(data => {
                setTemperatura({
                          temperatura: data.main.temp.toFixed(),
                          cidade: data.name,
                          tempo: data.weather[0].description,
                          vento: data.wind.speed,
                          sensaçãoTermica: data.main.feels_like.toFixed(),
                          umidade: data.main.humidity
                        });
            });
    }, [latitude, longitude]);

    return(pegarTemperatura(temperatura));
};