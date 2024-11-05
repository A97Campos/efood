import { Hero, Texto, Titulo } from "./style";

export type Props = {
    texto: string
    titulo: string
    imagem: string
}

export const Banner = ({texto, titulo, imagem}: Props) => (
    <Hero style={{backgroundImage: `url(${imagem})`}}>
        <div className="container">
            <Texto>{texto}</Texto>
            <Titulo>{titulo}</Titulo>
        </div>
    </Hero>
)
