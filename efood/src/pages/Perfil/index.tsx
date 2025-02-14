import { useParams } from "react-router-dom";
import { HeaderCardapio } from "../../components/HeaderCardapio";
import { ListaCardapios } from "../../components/ListaCardapio";
import { Banner } from "../../components/Banner";

import { useGetCardapiosQuery } from "../../services/api";
import { Loader } from "../../components/Loader";


type RestaurantParams = {
    id: string
}

export const Perfil = () => {
    const { id } = useParams() as RestaurantParams

    const { data: cardapio} = useGetCardapiosQuery(id)

    
    if (!cardapio) {
        return (
            <>
                <Loader />
            </>
    )
    }

    return(
        <>
            <HeaderCardapio />
            <Banner />
            <ListaCardapios car={cardapio}/>
        </>
    )
}