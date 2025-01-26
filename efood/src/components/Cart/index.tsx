import { Overlay, Sidebar, CartContainer, ListItem, Price, ImgCardapio, Lixeira } from "./style"

import lixeira from "../../assets/images/lixeira-de-reciclagem 1.png"
import { ButtonContainer } from "../Button/style"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"

export const Cart = () => {
    const { isOpen, itemCardapio } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()
    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const valorTotal = () => {
        return itemCardapio.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.preco)
        }, 0)
    }

    const formataPreco = (preco = 0) => {
        return new Intl.NumberFormat('pt-BR' , {
            style: 'currency',
            currency: 'BRL'
        }).format(preco)
    }
    
    return (
        <>
            <CartContainer className={isOpen ? 'isOpen' : ''}>
                <Overlay onClick={closeCart} />
                <Sidebar>
                    <ul>
                        {itemCardapio.map((item) => (
                            <ListItem key={item.id}>
                                <ImgCardapio src={item.foto} alt={item.nome} />
                                <div>
                                    <h3>{item.nome}</h3>
                                    <p>{formataPreco(item.preco)}</p>
                                </div>
                                <Lixeira src={lixeira} alt="" onClick={() => removeItem(item.id)}/>
                            </ListItem>
                        ))}
                    </ul>
                    <Price>Valor total: <span>{formataPreco(valorTotal())}</span></Price>
                    <ButtonContainer type="button" title="continuar compra">Continuar com a entrega</ButtonContainer>
                </Sidebar>
            </CartContainer>
        </>
    )
}