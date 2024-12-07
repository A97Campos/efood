import { useEffect, useState } from "react";

import { ListaRestaurantes } from "../../components/ListaRestaurante";
import { Header } from "../../components/Header";

export type Restaurantes = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: {
        id: number
        foto: string
        preco: number
        nome: string
        descricao: string
        porcao: string
    }
}

export const Home = () => {
    const [restaurante, setRestaurante] = useState<Restaurantes[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then((res) => res.json())
        .then((res) => setRestaurante(res))
    }, [])

    return (
        <>  
            <Header/>
            <ListaRestaurantes restaurantes={restaurante} />
        </>
    )
}