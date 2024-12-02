import { Restaurantes } from "../../pages/Home"
import { Button, CardCardapio, Titulo, Txt } from "./style"

export type Props = {
    infos: Restaurantes
}

export const Cardapio = ({infos}: Props) => {
    return(
        <CardCardapio>
                <img src={infos.cardapio.foto} alt="" />
                <Titulo>{infos.cardapio.nome}</Titulo>
                <Txt>{infos.cardapio.descricao}</Txt>
                <Button>Mais detalhes</Button>
            </CardCardapio>
    )
}