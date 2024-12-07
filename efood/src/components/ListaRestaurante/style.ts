import styled from "styled-components"

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    margin: 80px 0 120px 0;
    gap: 48px 80px;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        
    }
`