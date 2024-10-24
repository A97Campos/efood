import styled from "styled-components";
import { cores } from "../../globalStyle";
import { TagsContainer } from "../Tags/style";
import { Link } from "react-router-dom";

export const Card = styled.div`
    border: 1px solid ${cores.rosaEscuro};
    width: 474px;
    position: relative;

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

export const ButtonLink = styled(Link)`
    background-color: ${cores.rosaEscuro};
    color: ${cores.rosaClaro};
    padding: 8px 6px;
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
`
