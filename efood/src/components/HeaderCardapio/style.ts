import styled from "styled-components";
import { cores } from "../../globalStyle";

export const Header = styled.header`    
    background-color: ${cores.rosaClaro};
    padding: 63px 0 65px 0;
    color: ${cores.rosaEscuro};
`

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    
    p {
        cursor: pointer;
        font-weight: 900;
        font-size: 18px;
        line-height: 21px;
    }
`