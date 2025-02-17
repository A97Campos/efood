import styled from "styled-components";
import { cores } from "../../globalStyle";
import { TagsContainer } from "../Tags/style";

export const Card = styled.div`
    border: 1px solid ${cores.rosaEscuro};
    max-width: 474px;
    position: relative;
    overflow: hidden;

    > img{ 
        width: 100%;
        max-height: 217px;
        object-fit: cover;
    }

    div {
    padding: 8px;
    }
`

export const Infos = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;

    ${TagsContainer} {
    margin-left: 8px;
    }
`

export const Titulo = styled.h3`
    color: ${cores.rosaEscuro};
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        margin-left: 8px;
    }
`

export const Txt = styled.p`
    color: ${cores.rosaEscuro};
    font-size: 14px;
    line-height: 22px;
    padding: 16px 0;
`
