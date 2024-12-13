import { Cardapios } from "../../pages/Home";
import { Lista, Section } from "./style";
import { Cardapio } from "../Cardapio/index";

export type Props = {
    car: Cardapios[]
}

export const ListaCardapios = ({ car }: Props) => {

    return (
            <Section>
                <div className="container">
                    <Lista>
                        {car.map((c) => (
                                <li key={c.id}>
                                    <Cardapio
                                    id={c.id}
                                    foto={c.foto}
                                    descricao={c.descricao}
                                    nome={c.nome}
                                    preco={c.preco}
                                    porcao={c.porcao}
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
