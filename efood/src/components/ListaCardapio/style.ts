import styled from "styled-components";
import { cores } from "../../globalStyle";

export const Section = styled.section`
    background-color: ${cores.corDeFundo};
    padding: 56px 0 120px 0;
    position: relative;
`

export const Lista = styled.div`
    display: grid;
    gap: 32px;

    @media only screen and (min-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    display: flex;
    justify-content: center;
    align-items: center;
}

.isVisibel {
    display: none;
}
`

export const ModalContent = styled.div`    
    background-color: ${cores.rosaEscuro};
    color: ${cores.branco};
    padding: 32px;
    position: relative;

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

export const ModalButton = styled.button`
    font-weight: 700;
    font-size: 14px;
    padding: 4px;
    background-color: ${cores.rosaClaro};
    color: ${cores.rosaEscuro};
    border: none;
    cursor: pointer;
`

export const BtnFechar = styled.img`
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
`