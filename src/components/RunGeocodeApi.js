import { useState, useEffect } from "react";

export default function RunGeocodeApi({latitude, longitude, pegarCidade}) {

    const [ dataCidade, setDataCidade ] = useState('');

        useEffect(() => {
            fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
            .then(response => response.json())
            .then(data => {
                setDataCidade(data.city);
            });
        }, [latitude, longitude]);

    return(pegarCidade(dataCidade));

};