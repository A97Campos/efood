import styled from "styled-components";

import { cores } from "../../globalStyle";
import { ButtonContainer } from "../Button/style";

export const CardCardapio = styled.div`
    padding: 8px;
    background-color: ${cores.rosaEscuro};
    color: ${cores.rosaClaro};

    img {
        width: 304px;
        height: 167px;
    }
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