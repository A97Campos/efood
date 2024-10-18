import { createGlobalStyle } from "styled-components";

export const cores = {
    rosaClaro: '#FFEBD9',
    rosaEscuro: '#E66767'
}

export const GlobalCss = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", serif;
}
`