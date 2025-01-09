import styled from "styled-components"
import { ButtonContainer } from "../Button/style"
import { cores } from "../../globalStyle"

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${ButtonContainer} {
        max-width: 220px;
    }
}

.visivel {
    display: none;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
}
`

export const ModalContent = styled.div`    
    background-color: ${cores.rosaEscuro};
    color: ${cores.branco};
    padding: 32px;
    position: relative;
    z-index: 1;

    @media only screen and (min-width: 600px) {
        display: flex;
        max-height: 344px;
    }
`

export const ModalImg = styled.img`
    display: block;
        margin: auto;
        max-width: 280px;
        max-height: 280px;
        object-fit: cover;
        
    @media only screen and (min-width: 600px) {
        margin-right: 24px;        
        width: 280px;
        height: 280px;
    }
`

export const ModalTitle = styled.h3`
        font-size: 18px;
        font-weight: 900;
        margin-top: 16px;

        @media only screen and (min-width: 600px) {
        margin-top: 0;
    }
`

export const ModalText = styled.p`
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;

    span {
        display: block;
        margin-top: 16px;
    }
`

export const BtnFechar = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
`