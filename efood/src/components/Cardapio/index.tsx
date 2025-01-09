import { CardCardapio, Titulo, Txt } from "./style"

import { ButtonContainer } from "../Button/style"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {add, open} from "../../store/reducers/cart"
import { Cardapios } from "../../pages/Home"
import { RootReducer } from "../../store"
import { abrirModal, fecharModal } from "../../store/reducers/modal"

type Props = {
    id: number
    foto: string
    descricao: string
    nome: string
    preco: number
    porcao: string
}

export const Cardapio = ({ id, foto, descricao, nome, porcao, preco }: Props) => {
    
    const getDescricao = (descricao: string) => {
        if (descricao.length > 95) {
            return descricao.slice(0, 80) + '...'
        }
    }

    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(abrirModal())
    }

    return(
        <>
            <CardCardapio key={id}>
                <img src={foto} alt="" />
                <Titulo>{nome}</Titulo>
                <Txt>{getDescricao(descricao)}</Txt>
                <ButtonContainer onClick={() => openModal()} type="button" title="mais detalhes">Mais detalhes</ButtonContainer>
            </CardCardapio>
            
        </>
    )
}