import { Restaurantes } from "../../pages/Home";
import { Lista, Section } from "./style";
import { Cardapio } from "../Cardapio/index";

export type Props = {
    car: Restaurantes[]
}

export const ListaCardapios = ({car}: Props) => {

    return (
            <Section>
                <div className="container">
                    <Lista>
                        {car.map((c) => (
                                <li key={c.cardapio.id}>
                                    <Cardapio
                                    id={c.cardapio.id}
                                    imagem={c.cardapio.foto}
                                    texto={c.cardapio.descricao}
                                    titulo={c.cardapio.nome}
                                /> 
                                </li>                       
                            )
                        )}
                    </Lista>
                    {/* adicionar o maps do modal*/}
                </div>
            </Section>
    )
}
