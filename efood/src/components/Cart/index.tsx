import { Overlay, Sidebar, CartContainer, ListItem, Price, ImgCardapio, Lixeira } from "./style"

import lixeira from "../../assets/images/lixeira-de-reciclagem 1.png"
import { ButtonContainer } from "../Button/style"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from "../../store/reducers/cart"
import { openCheckout } from "../../store/reducers/checkout"
import { formataPreco, valorTotal } from "../../utils"

export const Cart = () => {
    const { isOpen, itemCardapio } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const abrirCheckout = () => {
        dispatch(openCheckout())
        dispatch(close())
    }
    
    return (
        <>
            <CartContainer className={isOpen ? 'isOpen' : ''}>
                <Overlay onClick={closeCart} />
                {itemCardapio.length === 0 ? 
                <Sidebar>
                    <p>Adicione um item ao carrinho para continuar a compra.</p>
                </Sidebar> : 
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
                        <Price>Valor total: <span>{formataPreco(valorTotal(itemCardapio))}</span></Price>
                        <ButtonContainer type="button" title="continuar compra" onClick={abrirCheckout}>Continuar com a entrega</ButtonContainer>
                    </Sidebar>
            }
            </CartContainer>
        </>
    )
}