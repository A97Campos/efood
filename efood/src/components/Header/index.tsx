import { Hero, Titulo } from './style'
import logo from '../../assets/images/logoEfood.png'

export const Header = () => (
    <Hero>
        <div className="container">
            <img src={logo} alt="Efood logo" />
            <Titulo>Viva experiências gastronômicas<br/>no conforto da sua casa</Titulo>
        </div>
    </Hero>
)