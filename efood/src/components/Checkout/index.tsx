import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useFormik } from "formik"
import * as Yup from 'yup'
import { ButtonContainer } from "../Button/style"
import { CheckContainer, Container, GrupoInput, Input, Linha, Overlay } from "./style"
import { RootReducer } from "../../store"
import { closeCheckout } from "../../store/reducers/checkout"
import { open } from "../../store/reducers/cart"

export const Checkout = () => {

    const { isOpen } = useSelector((state: RootReducer) => state.checkout)

    const [ pagamento, setPagamento ] = useState(true)

    const dispatch = useDispatch()

    const fecharCheckout = () => {
        dispatch(closeCheckout())
    }

    const voltarParaCarrinho = () => {
        dispatch(closeCheckout())
        dispatch(open())
    }

    const form = useFormik({
        initialValues: {
            nomeNoCartao: '',
            numeroDoCartao: '',
            cvv: '',
            mesDeVencimento: '',
            anoDeVencimento: ''
        },
        validationSchema: Yup.object({
            nome: Yup.string()
                .min(5, 'O campo precisa ter ao menos 5 caracteres')
                .required('O campo é obrigatório'),
            endereco: Yup.string()
                .min(4, 'O campo precisa ter ao menos 4 caracteres')
                .required('O campo é obrigatório'),
            cidade: Yup.string()
                .min(2, 'O campo precisa ter ao menos 2 caracteres')
                .required('O campo é obrigatório'),
            cep: Yup.string()
                .min(8, 'O campo precisa ter 8 caracteres')
                .max(8, 'O campo precisa ter 8 caracteres')
                .required('O campo é obrigatório'),
            numero: Yup.string()
                .required('O campo é obrigatório'),

            
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <Container className={isOpen ? '' : 'is-open'}>
            <Overlay onClick={fecharCheckout} />
            <CheckContainer>
                <h3>Entrega</h3>
                <form onSubmit={form.handleSubmit}>
                    {pagamento ? (
                        <Linha>
                        <GrupoInput>
                            <label htmlFor="nome">Quem irá receber</label>
                            <Input type="text" name="nome" id="nome" />
                        </GrupoInput>
                        <GrupoInput>
                            <label htmlFor="endereco">Endereço</label>
                            <Input type="text" name="endereco" id="endereco" />
                        </GrupoInput>
                        <GrupoInput>
                            <label htmlFor="cidade">Cidade</label>
                            <Input type="text" name="cidade" id="cidade" />
                        </GrupoInput>
                        <GrupoInput gridColumn="auto auto" gap="34px">
                            <div>
                                <label htmlFor="cep">CEP</label>
                                <Input type="text" name="cep" id="cep" maxWidth="155px"/>
                            </div>
                            <div>
                                <label htmlFor="numero">Número</label>
                                <Input type="text" name="numero" id="numero" maxWidth="155px"/>
                            </div>
                        </GrupoInput>
                        <GrupoInput marginBottom="24px">
                            <label htmlFor="complemento">Complemento (opicional)</label>
                            <Input type="text" name="complemento" id="complemento" />
                        </GrupoInput>

                        <ButtonContainer type="button" title="continuar com o pagamento" onClick={() => setPagamento(false)}>Continuar com o pagamento</ButtonContainer>
                        <ButtonContainer 
                            type="button" 
                            title="voltar para o carrinho" 
                            onClick={voltarParaCarrinho}>
                            Voltar para o carrinho
                        </ButtonContainer>
                    </Linha>
                    ) : (
                        <Linha>
                        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
                        <GrupoInput>
                            <label htmlFor="nomeNoCartao">Nome no cartão</label>
                            <Input type="text" 
                            name="nomeNoCartao" 
                            id="nomeNoCartao"
                            value={form.values.nomeNoCartao}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            />
                        </GrupoInput>
                        <GrupoInput gridColumn="auto auto" gap="30px">
                            <div>
                                <label htmlFor="numeroDoCartao">Número do cartão</label>
                                <Input type="text" 
                                name="numeroDoCartao"
                                id="numeroDoCartao"
                                value={form.values.numeroDoCartao}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                maxWidth="228px"
                                />
                            </div>
                            <div>
                                <label htmlFor="cvv">CVV</label>
                                <Input type="text"
                                name="cvv"
                                id="cvv"
                                value={form.values.cvv}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                maxWidth="87px"
                                />                                
                            </div>
                        </GrupoInput>
                        <GrupoInput gridColumn="auto auto" gap="32px" marginBottom="24px">
                            <div>                                
                                <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                                <Input type="text"
                                name="mesDeVencimento"
                                id="mesDeVencimento"
                                value={form.values.mesDeVencimento}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                maxWidth="155px"
                                />
                            </div>
                            <div>                                
                                <label htmlFor="anoDeVencimento">Ano de vencimento</label>
                                <Input type="text" 
                                name="anoDeVencimento"
                                id="anoDeVencimento"
                                value={form.values.anoDeVencimento}
                                onChange={form.handleChange}
                                onBlur={form.handleBlur}
                                maxWidth="155px"
                                />
                            </div>
                        </GrupoInput>

                        <ButtonContainer type="button" title="Finalizar pagamento">Finalizar Pagamento</ButtonContainer>
                        <ButtonContainer type="button" title="Voltar para a edição de pagamento" onClick={() => setPagamento(true)}>Voltar para a edição de endereço</ButtonContainer>
                    </Linha>
                    )}

                    

                    
                </form>

                <Linha>
                    <h3>Pedido realizado - order_id</h3>
                    <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                    <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                    <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                    <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                    <ButtonContainer type="button" title="concluir">Concluir</ButtonContainer>
                </Linha>
            </CheckContainer>
        </Container>

    )
}