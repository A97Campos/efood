import { useEffect, useState } from "react";

import { HeaderCardapio } from "../../components/HeaderCardapio";
import { ListaCardapios } from "../../components/ListaCardapio";
import { Banner } from "../../components/Banner";


export const Perfil = () => {

    const [cardapio, setCardapio] = useState([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => setCardapio(res))
    }, [])

    return(
        <>
            <HeaderCardapio />
            <Banner />
            <ListaCardapios />
        </>
    )
}