import { useState, useEffect } from "react";

const API_KEY_01 = process.env.REACT_APP_API_KEY_01;

export default function RunWeatherApi({cidade, pegarTemperatura}){

    const [ temperatura, setTemperatura ] = useState({ temperatura:'', cidade:'', tempo:'', vento:'', sensaçãoTermica:'', umidade:'' });

    useEffect(() => {

        if(cidade != ''){
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=${API_KEY_01}&mode=json`)
            .then(response => response.json())
            .then(json => {
                setTemperatura({
                            temperatura:json.main.temp.toFixed(),
                            cidade:json.name,
                            tempo: json.weather[0].description,
                            vento: json.wind.speed,
                            sensaçãoTermica: json.main.feels_like.toFixed(),
                            umidade: json.main.humidity
                        });
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        };
        
    }, [cidade]);

    return(pegarTemperatura(temperatura));
};