import { Link } from 'react-router-dom'
import logo from '../../assets/images/logoEfood.png'
import { Header, Nav } from './style'

export const HeaderCardapio = () => (
    <Header>
        <div className="container">
            <Nav>
                <p>Restaurante</p>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                <p>0 produtos(s) no carrinho</p>
            </Nav>
        </div>
    </Header>
)