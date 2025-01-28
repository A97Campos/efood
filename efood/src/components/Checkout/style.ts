import styled from "styled-components";
import { cores } from "../../globalStyle";
import { ButtonContainer } from "../Button/style";

type GrupoInputProps = {
    gridColumn?: string
    gap?: string
    marginBottom?: string
}

type InputProps = {
    maxWidth?: string
}

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.is-open {
        display: none;
    }
`

export const CheckContainer = styled.div`
    background-color: ${cores.rosaEscuro};
    color: ${cores.rosaClaro};
    padding: 16px 8px;
    height: 100%;
    width: 360px;
    position: fixed;
    top: 0;
    right: 0;

    h3 {
        margin-bottom: 16px;
    }
`

export const Linha = styled.div`

    ${ButtonContainer} {
        display: block;
        width: 100%;
        margin-bottom: 8px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 24px;
    }

    &.estaAberto {
        display: none;
    }
`

export const GrupoInput = styled.div<GrupoInputProps>`
    display: grid;
    grid-template-columns: ${(props) => props.gridColumn || 'auto'};
    gap: ${(props) => props.gap || '0'};
    margin-bottom: ${(props) => props.marginBottom || '0'};

    
    label {
        margin-bottom: 8px;
        }
        
`
export const Input = styled.input<InputProps>`
    margin-bottom: 8px;
    border: none;
    height: 32px;
    background-color: ${cores.rosaClaro};
    width: ${(props) => props.maxWidth || 'auto'};    
`

export const Overlay = styled.div`
    background-color: rgba(0,0,0, 0.7);
    height: 100%;
    width: 100%;
`