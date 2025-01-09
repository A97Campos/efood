import { Tags } from "../Tags";
import { Card, Infos, Titulo, Txt } from "./style";
import estrela from "../../assets/images/estrela.png";
import { ButtonLink } from "../Button/style";

export type Props = {
    imagem: string
    infos: string
    destacado: boolean
    titulo: string
    texto: string
    nota: string
    destino: string
    id: number
}

export const Lojas = ({imagem, infos, titulo, texto, nota, destino, destacado, id}: Props) => (
    <Card>
        <img src={imagem} alt="" />
        <Infos>
            {destacado === true ? <Tags>destaque da semana</Tags> : ''}
            <Tags>{infos}</Tags>
        </Infos>
        <div>
            <Titulo>{titulo}
                <span>
                    {nota}
                    <img src={estrela} alt="icon estrela" />
                </span>
            </Titulo>
            <Txt>{texto}</Txt>
            <ButtonLink to={destino} title="saiba mais" variant="rosaEscuro" type="link">Saiba mais</ButtonLink>            
        </div>
    </Card>
)

