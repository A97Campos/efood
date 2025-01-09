import { useEffect, useState } from "react";

import { ListaRestaurantes } from "../../components/ListaRestaurante";
import { Header } from "../../components/Header";
import { useGetRestauranteQuery } from "../../services/api";

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

    return (
        <>  
            <Header/>
            <ListaRestaurantes restaurantes={restaurante} />
        </>
    )
}