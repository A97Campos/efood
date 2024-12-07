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
