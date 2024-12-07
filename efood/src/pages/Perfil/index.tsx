import { HeaderCardapio } from "../../components/HeaderCardapio";
import { ListaCardapios } from "../../components/ListaCardapio";
import { Banner } from "../../components/Banner";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Restaurantes } from "../Home";

export const Perfil = () => {
    const { id } = useParams()

    const [listaCardapio, setListaCardapio] = useState<Restaurantes[]>([])


    // No componente Perfil
    useEffect(() => {
        fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
            .then((res) => res.json())
            .then((res) => {
            setListaCardapio(res);
            });
    }, [id]);

    return(
        <>
            <HeaderCardapio />
            <Banner />
            <ListaCardapios car={listaCardapio}/>
        </>
    )
}