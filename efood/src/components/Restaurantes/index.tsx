import { Tags } from "../Tags";
import { ButtonLink, Card, Infos, Titulo, Txt } from "./style";
import estrela from "../../assets/images/estrela.png";

export type Props = {
    imagem: string
    infos: string[]
    titulo: string
    texto: string
    nota: number
    destino: string
}

export const Lojas = ({imagem, infos, titulo, texto, nota, destino}: Props) => (
    <Card>
        <img src={imagem} alt="" />
        <Infos>
            {infos.map((info) => (
                <Tags key={info}>{info}</Tags>
            ))}
        </Infos>
        <div>
            <Titulo>{titulo}
                <span>
                    {nota}
                    <img src={estrela} alt="icon estrela" />
                </span>
            </Titulo>
            <Txt>{texto}</Txt>
            <ButtonLink to={destino}>Saiba mais</ButtonLink>            
        </div>
    </Card>
)

