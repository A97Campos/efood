import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

import logo from "../../assets/images/logoEfood.png"

import { FooterContainer, Icons, Txt } from "./style";


export const Footer = () => (
    <FooterContainer>
        <div className="container">
            <img src={logo} alt="Logo efood" />
            <Icons>
                <a href="#"><BsInstagram /></a>
                <a href="#"><BsFacebook /></a>
                <a href="#"><BsTwitterX /></a>
            </Icons>
            <Txt>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br /> dos produtos é toda do estabelecimento contratado. </Txt>
        </div>
    </FooterContainer>
    )