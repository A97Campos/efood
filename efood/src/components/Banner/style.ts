import styled from "styled-components";
import { cores } from "../../globalStyle";

export const Hero = styled.div`
    widht: 100%;
    height: 280px;
    background-size: cover;
    background-repeat: no-repeat;

    .container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 25px 0 32px 0;
        font-size: 32px;        
        color: ${cores.branco};
    }
`

export const Texto = styled.p`
    font-weight: 100;
`

export const Titulo = styled.h2`
    font-weight: 900;
    font-size: 32px;
`