import { useDispatch, useSelector } from "react-redux"
import { ButtonContainer } from "../Button/style"
import { BtnFechar, ModalContainer, ModalContent, ModalImg, ModalText, ModalTitle } from "./style"
import { RootReducer } from "../../store"
import { add, open } from "../../store/reducers/cart"
import { abrirModal, fecharModal } from "../../store/reducers/modal"
import { Cardapios } from "../../pages/Home"

import fechar from "../../assets/images/fechar.png"

type Props = {
    cardapio: Cardapios
}

export const Modal = ({cardapio}:Props) => {

    const {estaAberto} = useSelector((state: RootReducer) => state.modal)
    
    const dispatch = useDispatch()
    
    const addToCart = () => {
        dispatch(add(cardapio))
        dispatch(fecharModal())
        dispatch(open())
        }

    const openModal = () => {
        dispatch(abrirModal())
    }

    const closeModal = () => {
        dispatch(fecharModal())
    }
    return (
        <ModalContainer className={estaAberto? '' : 'visivel'} > 
                <ModalContent className="container">
                    <BtnFechar src={fechar} alt="" onClick={() => closeModal()} />
                    <ModalImg src={cardapio.foto} alt="" />
                    <div>
                        <ModalTitle>{cardapio.nome}</ModalTitle>
                        <ModalText>{cardapio.descricao} <span>Serve de: {cardapio.porcao}</span>
                        </ModalText>
                        <ButtonContainer onClick={addToCart}>Adicionar ao carrinho - R$ {cardapio.preco}</ButtonContainer>
                    </div>
                </ModalContent>
                <div className="overlay" onClick={() => closeModal()}></div>
        </ModalContainer>
    )
}