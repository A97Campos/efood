import styled from "styled-components"

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    margin: 80px 0 120px 0;

    @media only screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 48px 80px;
    }
`