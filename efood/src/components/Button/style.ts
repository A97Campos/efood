import styled from "styled-components";
import { cores } from "../../globalStyle";
import { Link } from "react-router-dom";
import { Props } from ".";

export const ButtonContainer = styled.button`
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
    width: 100%;
    border: none;
    font-weight: 700;
    font-size: 14px;
    padding: 4px 0;
    cursor: pointer;
`

export const ButtonLink = styled(Link)<Props>`
    font-weight: 700;
    font-size: 14px;
    padding: 4px;
    background-color: ${(props) => props.variant === 'rosaEscuro' ? cores.rosaEscuro : cores.rosaClaro} ;
    color: ${(props) => props.variant === 'rosaEscuro' ? cores.rosaClaro : cores.rosaEscuro};
    border: none;
    cursor: pointer;
    text-decoration: none;
`