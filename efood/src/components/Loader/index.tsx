import { BarLoader } from "react-spinners";
import { cores } from "../../globalStyle";
import { Container } from "./style";

export const Loader = () => (
    <Container>
        <BarLoader color={cores.rosaEscuro}/>
    </Container>
)