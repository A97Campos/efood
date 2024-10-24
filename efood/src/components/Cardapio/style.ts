import styled from "styled-components";

import { cores } from "../../globalStyle";

export const CardCardapio = styled.div`
    padding: 8px;
    background-color: ${cores.rosaEscuro};
    color: ${cores.rosaClaro};
`

export const Titulo = styled.h3`
    font-weight: 900;
    font-size: 16px;
`

export const Txt = styled.p`
    font-weight: 400;
    margin: 8px 0;
    font-size: 14px;
`

export const Button = styled.button`
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
    width: 100%;
    border: none;
    font-weight: 700;
    font-size: 14px;
    padding: 4px 0;
    cursor: pointer;
`