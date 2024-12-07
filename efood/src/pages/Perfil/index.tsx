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
                // Garantir que o valor seja um array antes de atualizar o estado
                setListaCardapio(Array.isArray(res) ? res : []); // Ou ajustar conforme a estrutura real da resposta
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