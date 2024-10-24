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
                <Button>Adicionar ao carrinho</Button>
            </CardCardapio>
)

/*<CardCardapio>
                <img src={pizza} alt="" />
                <Titulo>Pizza Marguerita</Titulo>
                <Txt>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Txt>
                <Button>Adicionar ao carrinho</Button>
            </CardCardapio>
            */