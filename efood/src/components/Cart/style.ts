import styled from "styled-components";
import { cores } from "../../globalStyle";

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;

    &.isOpen {
        display: flex;
    }
`

export const Overlay = styled.div`
    background-color: rgba(0,0,0, 0.7);
    height: 100%;
    width: 100%;
`

export const Sidebar = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 360px;
    height: 100%;
    background-color: ${cores.rosaEscuro};
    padding: 32px 8px;
`

export const ListItem = styled.li`
    background-color: ${cores.rosaClaro};
    list-style-type: none;
    display: flex;
    color: ${cores.rosaEscuro};
    margin-bottom: 16px;
    padding: 8px 8px 12px 8px;
    position: relative;

    h3 {
        font-size: 18px;
        font-weight: 900;
        margin-bottom: 16px;
    }

    p {
        font-size: 14px;
        font-weight: 400;
    }
`

export const ImgCardapio = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
`

export const Price = styled.p`
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    color: ${cores.rosaClaro};
    margin: 40px 0 16px 0;
`

export const Lixeira = styled.img`
    width: 16px;
        height: 16px;
        position: absolute;
        bottom: 8px;
        right: 8px;
`