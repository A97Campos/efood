import styled from "styled-components";
import { cores } from "../../globalStyle";

export const FooterContainer = styled.footer`
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
    text-align: center;
    padding: 40px 0;
`

export const Icons = styled.div`
    padding: 33px 0 80px 0;

    a {
        padding-left: 8px;
        color: ${cores.rosaEscuro};
    }
`

export const Txt = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
`