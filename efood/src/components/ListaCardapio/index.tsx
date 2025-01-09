import { Restaurantes } from "../../pages/Home";
import { Lista, Section } from "./style";
import { Cardapio } from "../Cardapio/index";

export type Props = {
    car: Restaurantes
}

export const ListaCardapios = ({ car }: Props) => {

    return (
            <Section> 
                <div className="container">
                    <Lista>
                        {car.cardapio.map((c) => (
                                <Cardapio
                                key={c.id}
                                id={c.id}
                                foto={c.foto}
                                descricao={c.descricao}
                                nome={c.nome}
                                preco={c.preco}
                                porcao={c.porcao}
                            />
                            )
                        )}
                    </Lista>
                </div>
            </Section>
    )
}
