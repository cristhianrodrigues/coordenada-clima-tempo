import { createGlobalStyle } from "styled-components";
import backgroundImg from "../imgs/backgroundImg.jpg"

export const GlobalStyles = createGlobalStyle`

    * {
     margin: 0;
     padding: 0;
    }

    html {
        font-family: 'Outfit', sans-serif;
    }

    .infoClima, .negado {
        width: 100%;
        height: 100vh;
        position: relative;
        background-color: rgba(0,0,0,0.2);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .infoClima::before, .negado::before {
        content: '';
        background-image: url(${backgroundImg});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .localNegadoContainer {
        display: flex;
        text-align: center;
        align-items: center;
        align-content: center;
        width: 400px;
        height: 100px;
        background-color: rgba(228, 63, 63, 0.7);
        border-radius: 1rem;
    }

    .infoClimaContainer {
        width: 500px;
        border-radius: 15px;
    }

    .infosPrincipais {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .cidade {
        font-size: 2.5em;
    }

    .clima {
        display: flex;
        align-items: baseline;
        margin: 2rem 0;
    }

    .clima h2 {
        margin: 1rem 1.5rem;
    }

    .temperatura {
        font-size: 4rem;
    }

    .tempo {
        font-size: 2rem;
        font-weight: 400;
    }

    .tempo::first-letter {
        text-transform: uppercase;
    }

    .outrasInfo {
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        background-color: rgba(200,200,200,0.4);
        border-radius: 1.7rem;
    }

    .outrasInfo div {
        margin: 30px;
    }
`;