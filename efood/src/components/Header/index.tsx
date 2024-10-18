import { Hero, Titulo } from './style'
import logo from '../../assets/images/logoEfood.png'

export const Header = () => (
    <Hero>
        <img src={logo} alt="Efood logo" />
        <Titulo>Viva experiências gastronômicas<br/>no conforto da sua casa</Titulo>
    </Hero>
)