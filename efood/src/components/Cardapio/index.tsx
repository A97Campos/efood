import { useDispatch, useSelector } from "react-redux"

import { RootReducer } from "../../store"
import { abrirModal, fecharModal } from "../../store/reducers/modal"
import {add, open} from "../../store/reducers/cart"

import { BtnFechar, CardCardapio, ModalContainer, ModalContent, ModalImg, ModalText, ModalTitle, Titulo, Txt } from "./style"
import { ButtonContainer } from "../Button/style"

import { Cardapios } from "../../pages/Home"

import fechar from "../../assets/images/fechar.png"


type Props = {
    id: number
    foto: string
    descricao: string
    nome: string
    preco: number
    porcao: string
    cardapio: Cardapios
}

export const Cardapio = ({ id, foto, descricao, nome, porcao, preco, cardapio }: Props) => {
    
    const getDescricao = (descricao: string) => {
        if (descricao.length > 95) {
            return descricao.slice(0, 80) + '...'
        }
    }
    
    const {estaAberto} = useSelector((state: RootReducer) => state.modal)

    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(abrirModal())
    }

    const closeModal = () => {
        dispatch(fecharModal())
    }

    const addToCart = () => {
        dispatch(fecharModal())
        dispatch(add(cardapio))
        dispatch(open())
    }

    return(
        <>
            <CardCardapio key={id}>
                <img src={foto} alt="" />
                <Titulo>{nome}</Titulo>
                <Txt>{getDescricao(descricao)}</Txt>
                <ButtonContainer onClick={() => openModal()} type="button" title="mais detalhes">Mais detalhes</ButtonContainer>
            </CardCardapio>
            <ModalContainer className={estaAberto ? '' : 'visivel'} > 
                <ModalContent className="container">
                    <BtnFechar src={fechar} alt="" onClick={() => closeModal()} />
                    <ModalImg src={foto} alt="" />
                    <div>
                        <ModalTitle>{nome}</ModalTitle>
                        <ModalText>{descricao} <span>Serve de: {porcao}</span>
                        </ModalText>
                        <ButtonContainer onClick={addToCart}>Adicionar ao carrinho - R$ {preco}</ButtonContainer>
                    </div>
                </ModalContent>
                <div className="overlay" onClick={() => closeModal()}></div>
            </ModalContainer>
        </>
    )
}