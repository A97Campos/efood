import { useEffect, useState } from "react";

import { HeaderCardapio } from "../../components/HeaderCardapio";
import { ListaCardapios } from "../../components/ListaCardapio";
import { Banner } from "../../components/Banner";
import { useParams } from "react-router-dom";
import { Restaurantes } from "../Home";


export const Perfil = () => {
    const { id } = useParams()

    const [cardapio, setCardapio] = useState<Restaurantes>()

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setCardapio(res))
    }, [id])

    
    if (!cardapio) {
    return (<>
                <HeaderCardapio />
                <Banner />
                <h3>...Carregando</h3>
            </>)
    }

    return(
        <>
            <HeaderCardapio />
            <Banner />
            <ListaCardapios cardapios={[cardapio]}/>
        </>
    )
}