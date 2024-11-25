import { Cardapios } from "../../models/cardapios";
import { BtnFechar, Lista, Modal, ModalButton, ModalContent, ModalImg, ModalText, ModalTitle, Section } from "./style";
import { Cardapio } from "../Cardapio/index"

import pizza from "../../assets/images/pizzaMarguerita.png"
import fechar from "../../assets/images/fechar.png"

export type Props = {
    cardapios: Cardapios[]
}

export const ListaCardapios = ({cardapios}: Props) => {
    return (
        <>
            <Section>
                <div className="container">
                    <Lista>
                        {cardapios.map(
                            (car) => (
                                <Cardapio 
                                key={car.id}
                                imagem={car.imagem}
                                titulo={car.titulo}
                                texto={car.texto}
                                />                        
                            )
                        )}
                    </Lista>
                </div>
            </Section>
            <Modal className="isVisibel">
                <ModalContent className="container">
                    <BtnFechar src={fechar} alt="" />
                    <ModalImg src={pizza} alt="" />
                    <div>
                        <ModalTitle>Pizza Marguerita</ModalTitle>
                        <ModalText>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <span>Serve: de 2 a 3 pessoas</span>
                        </ModalText>
                        <ModalButton>Adicionar ao carrinho - R$ 60,90</ModalButton>
                    </div>
                </ModalContent>
            </Modal>
        </>
    )
}