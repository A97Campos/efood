import { useState } from "react"

import { BtnFechar, Button, CardCardapio, Modal, ModalButton, ModalContent, ModalImg, ModalText, ModalTitle, Titulo, Txt } from "./style"

import pizza from "../../assets/images/pizzaMarguerita.png"
import fechar from "../../assets/images/fechar.png"

type Props = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
}

export const Cardapio = ({id, foto, preco, nome, descricao, porcao}: Props) => {
    const [modalEstaVisivel, setModalEstaVisivel] = useState(true)
    const getDescricao = (descricao: string) => {
        if (descricao.length > 95) {
            return descricao.slice(0, 80) + '...'
        }
    }

    return(
        <>
            <CardCardapio>
                <img src={foto} alt="" />
                <Titulo>{nome}</Titulo>
                <Txt>{getDescricao(descricao)}</Txt>
                <Button onClick={() => setModalEstaVisivel(false)}>Mais detalhes</Button>
            </CardCardapio>

            <Modal className={modalEstaVisivel? 'visivel' : ''} > 
                <ModalContent className="container">
                    <BtnFechar src={fechar} alt="" onClick={() => setModalEstaVisivel(true)} />
                    <ModalImg src={foto} alt="" />
                    <div>
                        <ModalTitle>{nome}</ModalTitle>
                        <ModalText>{descricao} <span>Serve de: {porcao}</span>
                        </ModalText>
                        <ModalButton>Adicionar ao carrinho - R$ {preco}</ModalButton>
                    </div>
                </ModalContent>
                <div className="overlay" onClick={() => setModalEstaVisivel(true)}></div>
            </Modal>
        </>
    )
}