import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoEfood.png'
import { Header, Nav } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

export const HeaderCardapio = () => {
    const { itemCardapio } = useSelector((state: RootReducer) => state.cart)

    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }
    return (
    <>
        <Header>
            <div className="container">
                <Nav>
                    <p>Restaurante</p>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                    <p onClick={openCart}>{itemCardapio.length} produtos(s) no carrinho</p>
                </Nav>
            </div>
        </Header>
    </>
    )
}