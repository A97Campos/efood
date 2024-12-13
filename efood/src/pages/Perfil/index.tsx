import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderCardapio } from "../../components/HeaderCardapio";
import { ListaCardapios } from "../../components/ListaCardapio";
import { Banner } from "../../components/Banner";

import { Cardapios } from "../Home";

export const Perfil = () => {
    const { id } = useParams()

    const [listaCardapio, setListaCardapio] = useState<Cardapios[]>([])

    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json()) 
            .then((res) => setListaCardapio(res))
    })

    
    if (!listaCardapio) {
        return (
            <>
                <HeaderCardapio />
                <Banner />
                <h3>...Carregando</h3>
            </>
    )
    }

    return(
        <>
            <HeaderCardapio />
            <Banner />
            <ListaCardapios car={listaCardapio}/>
        </>
    )
}