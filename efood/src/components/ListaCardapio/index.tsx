import { Cardapios } from "../../models/cardapios";
import { Lista, Section } from "./style";
import { Cardapio } from "../Cardapio/index"

export type Props = {
    cardapios: Cardapios[]
}

export const ListaCardapios = ({cardapios}: Props) => (
    <Section>
        <div className="container">
            <Lista>
                {cardapios.map(
                    (car) => (
                        <Cardapio 
                        key={car.id}
                        imagem={car.imagem}
                        titulo={car.titulo}
                        texto={car.texto}
                        />                        
                    )
                )}
            </Lista>
        </div>
    </Section>
)