import { Lojas } from "../Restaurantes"
import { Restaurantes } from "../../models/Restaurantes";
import { List } from "./style";

export type Props = {
    restaurantes: Restaurantes[]
}

export const ListaRestaurantes = ({restaurantes}: Props) => (
    <div className="container">
        <div>
            <List>
                {restaurantes.map((res) => (
                    <Lojas
                        key={res.id}
                        imagem={res.imagem}
                        infos={res.infos}
                        titulo={res.titulo}
                        texto={res.texto}
                        nota={res.nota}
                        destino={res.destino}
                    />
                ))}
            </List>
        </div>
    </div>
)