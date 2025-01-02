import { Overlay, Sidebar, CartContainer, ListItem, Price } from "./style"

import pizza from "../../assets/images/pizzaMarguerita.png"
import { ButtonContainer } from "../Button/style"

export const Cart = () => {
    return (
        <>
            <CartContainer>
                <Overlay />
                <Sidebar>
                    <ul>
                        
                        <ListItem>
                            <img src={pizza} alt="" />
                            <div>
                                <h3>nome da comida</h3>
                                <p>R$ 49,90</p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <img src={pizza} alt="" />
                            <div>
                                <h3>nome da comida</h3>
                                <p>R$ 49,90</p>
                            </div>
                        </ListItem>
                        <ListItem>
                            <img src={pizza} alt="" />
                            <div>
                                <h3>nome da comida</h3>
                                <p>R$ 49,90</p>
                            </div>
                        </ListItem>
                    </ul>
                    <Price>Valor total: <span>189,90</span></Price>
                    <ButtonContainer type="button" title="continuar compra">continuar a compra</ButtonContainer>
                </Sidebar>
            </CartContainer>
        </>
    )
}