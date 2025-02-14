import { ListaRestaurantes } from "../../components/ListaRestaurante";
import { Header } from "../../components/Header";
import { useGetRestauranteQuery } from "../../services/api";
import { Loader } from "../../components/Loader";

export type Restaurantes = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: string
    descricao: string
    capa: string
    cardapio: Cardapios[]
}

export type Cardapios = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
}

export const Home = () => {
    const { data: restaurante} = useGetRestauranteQuery()

    if (!restaurante) {
        return (
            <Loader />
        )
    }

    return (
        <>  
            <Header/>
            <ListaRestaurantes restaurantes={restaurante} />
        </>
    )
}