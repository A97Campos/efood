import { BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

import logo from "../../assets/images/logoEfood.png"

import { FooterContainer, Icons, Txt } from "./style";


export const Footer = () => (
    <FooterContainer>
        <div className="container">
            <img src={logo} alt="Logo efood" />
            <Icons>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><BsInstagram /></a>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><BsFacebook /></a>
                <a href="https://x.com/" target="_blank" rel="noreferrer"><BsTwitterX /></a>
            </Icons>
            <Txt>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br /> dos produtos é toda do estabelecimento contratado. </Txt>
        </div>
    </FooterContainer>
    )