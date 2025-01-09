import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoEfood.png'
import { Header, Nav } from './style'
import { useDispatch } from 'react-redux'
import { open } from '../../store/reducers/cart'

export const HeaderCardapio = () => {
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
                    <p onClick={openCart}>0 produtos(s) no carrinho</p>
                </Nav>
            </div>
        </Header>
    </>
    )
}