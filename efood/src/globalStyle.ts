import { createGlobalStyle } from "styled-components";

export const cores = {
    rosaClaro: '#FFEBD9',
    rosaEscuro: '#E66767',
    corDeFundo: '#FFF8F2',
    branco: '#ffffff'
}

export const GlobalCss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", serif;
}

.container {
    max-width: 1024px;
    width: 80%;
    margin: 0 auto;

    @media only screen and (min-width: 600px) {
    width: 100%;
    }
}
`