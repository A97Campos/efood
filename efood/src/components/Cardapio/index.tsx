import { useState } from "react"

import { BtnFechar, Button, CardCardapio, Modal, ModalButton, ModalContent, ModalImg, ModalText, ModalTitle, Titulo, Txt } from "./style"

import pizza from "../../assets/images/pizzaMarguerita.png"
import fechar from "../../assets/images/fechar.png"

type Props = {
    imagem: string
    titulo: string
    texto: string
    id: number
}

export const Cardapio = ({imagem, texto, titulo}: Props) => {

    const [modalEstaVisivel, setModalEstaVisivel] = useState(true)

    return(
        <>
            <CardCardapio>
                <img src={imagem} alt="" />
                <Titulo>{titulo}</Titulo>
                <Txt>{texto}</Txt>
                <Button onClick={() => setModalEstaVisivel(false)}>Mais detalhes</Button>
            </CardCardapio>

            {/*mudar o moodal para maps */}
            <Modal className={modalEstaVisivel? 'visivel' : ''} > 
                <ModalContent className="container">
                    <BtnFechar src={fechar} alt="" onClick={() => setModalEstaVisivel(true)} />
                    <ModalImg src={pizza} alt="" />
                    <div>
                        <ModalTitle>Pizza Marguerita</ModalTitle>
                        <ModalText>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <span>Serve: de 2 a 3 pessoas</span>
                        </ModalText>
                        <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
                    </div>
                </ModalContent>
                <div className="overlay" onClick={() => setModalEstaVisivel(true)}></div>
            </Modal>
        </>
    )
}