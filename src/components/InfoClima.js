import { useEffect, useState } from "react";

export default function InfoClima({dadosTemperatura}){

    const [ ventoEmKMH, setVentoEmKMH ] = useState();

    useEffect(() => {
        const numero = (dadosTemperatura.vento * 3.6);
        setVentoEmKMH( Number(numero).toFixed());
    }, [dadosTemperatura.vento]);

        return(

        <div className="infoClima">
          <div className="infoClimaContainer">
            <div className="infosPrincipais">
                <h1 className="cidade">{dadosTemperatura.cidade}</h1>
                <div className="clima">
                    <h2 className="temperatura">{dadosTemperatura.temperatura} °C</h2>
                    <h2 className="tempo">{dadosTemperatura.tempo}</h2>
                </div>
            </div>
            <div className="outrasInfo">
                <div className="sensacaoTermica">
                    <h2 className="outrasInfoDado">{dadosTemperatura.sensaçãoTermica} °C</h2>
                    <h2 className="descricao">Sensação</h2>
                </div>
                <div className="umidadeRelativaDoAr">
                    <h2 className="outrasInfoDado">{dadosTemperatura.umidade} %</h2>
                    <h2 className="descricao">Umidade</h2>
                </div>
                <div className="vento">
                    <h2 className="outrasInfoDado">{ventoEmKMH} KM/H</h2>
                    <h2 className="descricao">Vento</h2>
                </div>
            </div>
          </div>
        </div>

    //     <div className="infoClima">
    //     <h3>{dadosTemperatura.cidade}</h3>
    //     <h3>{dadosTemperatura.temperatura} °C</h3>
    //     <h3>{dadosTemperatura.clima}</h3>
    //   </div>

    );
}