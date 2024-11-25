import { Button, CardCardapio, Titulo, Txt } from "./style"

export type Props = {
    imagem: string,
    titulo: string,
    texto: string
}

export const Cardapio = ({imagem,texto,titulo}: Props) => (
            <CardCardapio>
                <img src={imagem} alt="" />
                <Titulo>{titulo}</Titulo>
                <Txt>{texto}</Txt>
                <Button>Mais detalhes</Button>
            </CardCardapio>
)
