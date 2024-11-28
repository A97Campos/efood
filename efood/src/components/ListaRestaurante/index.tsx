import { Restaurantes } from "../../pages/Home";
import { Lojas } from "../Restaurantes"
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
                        id={res.id}
                        imagem={res.capa}
                        infos={res.tipo}
                        destacado={res.destacado}
                        titulo={res.titulo}
                        texto={res.descricao}
                        nota={res.avaliacao}
                        destino={`/perfil/${res.id}`}
                    />
                ))}
            </List>
        </div>
    </div>
)