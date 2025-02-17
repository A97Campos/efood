import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonContainer } from "../Button/style";
import { CheckContainer, Container, GrupoInput, Linha, Overlay } from "./style";
import { RootReducer } from "../../store";
import { closeCheckout, limparCheckout } from "../../store/reducers/checkout";
import { limparCarrinho, open } from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/api";
import { formataPreco, valorTotal } from "../../utils";
import InputMask from "react-input-mask"

export const Checkout = () => {
    const { isOpen } = useSelector((state: RootReducer) => state.checkout);

    const { itemCardapio } = useSelector((state: RootReducer) => state.cart);

    const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation();

    const [pagamento, setPagamento] = useState(true);

    const dispatch = useDispatch();

    const fecharCheckout = () => {
    dispatch(closeCheckout())
    };

    const voltarParaCarrinho = () => {
    dispatch(closeCheckout());
    dispatch(open());
    };

    const concluirCompra = () => {
        dispatch(closeCheckout())
    }

    const form = useFormik({
    initialValues: {
        nomeNoCartao: "",
        numeroDoCartao: "",
        cvv: "",
        mesDeVencimento: "",
        anoDeVencimento: "",
        nome: "",
        endereco: "",
        cidade: "",
        cep: "",
        numero: "",
        complemento: "",
    },
    validationSchema: Yup.object({
        nome: Yup.string()
            .min(5, "O campo precisa ter ao menos 5 caracteres")
            .required("O campo é obrigatório"),
        endereco: Yup.string()
            .min(4, "O campo precisa ter ao menos 4 caracteres")
            .required("O campo é obrigatório"),
        cidade: Yup.string()
            .min(2, "O campo precisa ter ao menos 2 caracteres")
            .required("O campo é obrigatório"),
        cep: Yup.string()
            .min(9, "O campo precisa ter 8 caracteres")
            .max(9, "O campo precisa ter 8 caracteres")
            .required("O campo é obrigatório"),
        numero: Yup.string().required("O campo é obrigatório"),

        nomeNoCartao: Yup.string().when((values, schema) =>
            pagamento ? schema.required("O campo é obrigatório") : schema
        ),
        numeroDoCartao: Yup.string().when((values, schema) =>
            pagamento ? schema.required("O campo é obrigatório.") : schema
        ),
        cvv: Yup.string().when((values, schema) =>
            pagamento ? schema.required("O campo é obrigatório.") : schema
        ),
        mesDeVencimento: Yup.string().when((values, schema) =>
            pagamento ? schema.required("O campo é obrigatório.") : schema
        ),
        anoDeVencimento: Yup.string().when((values, schema) =>
            pagamento ? schema.required("O campo é obrigatório.") : schema
        ),
    }),
    onSubmit: (values) => {
        purchase({
            delivery: {
            receiver: values.nome,
            address: {
                description: values.endereco,
                city: values.cidade,
                zipCode: values.cep,
                number: Number(values.numero),
                complement: values.complemento,
            },
        },
        payment: {
            card: {
                name: values.nomeNoCartao,
                number: values.numeroDoCartao,
                code: Number(values.cvv),
                expires: {
                    month: Number(values.mesDeVencimento),
                    year: Number(values.anoDeVencimento),
                }
            }
        },
        products: itemCardapio.map((item) => ({
            id: item.id,
            price: item.preco,
        }))
        })
    }
    })

    console.log(form);

    const checkInputErro = (validaCampo: string) => {
        const estaAlterado = validaCampo in form.touched;
        const estaInvalido = validaCampo in form.errors;
        const temErro = estaAlterado && estaInvalido;

        return temErro;
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(limparCarrinho())
            dispatch(limparCheckout())
        }
    }, [isSuccess, dispatch])

    const clickDoButton = () => {
        form.handleSubmit()
        setPagamento(false)
    }

    return (
        <Container className={isOpen ? "" : "is-open"}>
        <Overlay onClick={fecharCheckout} />
        {isSuccess && data ? (
            <CheckContainer>
                <Linha>
                    <h3>Pedido realizado - {data.orderId}</h3>
                    <p>
                        Estamos felizes em informar que seu pedido já está em processo de
                        preparação e, em breve, será entregue no endereço fornecido.
                    </p>
                    <p>
                        Gostaríamos de ressaltar que nossos entregadores não estão
                        autorizados a realizar cobranças extras.
                    </p>
                    <p>
                        Lembre-se da importância de higienizar as mãos após o recebimento do
                        pedido, garantindo assim sua segurança e bem-estar durante a
                        refeição.
                    </p>
                    <p>
                        Esperamos que desfrute de uma deliciosa e agradável experiência
                        gastronômica. Bom apetite!
                    </p>
                    <ButtonContainer 
                        type="button"
                        title="concluir"
                        onClick={concluirCompra}>
                        Concluir
                    </ButtonContainer>
                </Linha>
            </CheckContainer>
        ) : (
            <form onSubmit={form.handleSubmit}>
                <CheckContainer>
                    {pagamento ? (
                        <>
                            <h3>Entrega</h3>
                            <Linha>
                                <GrupoInput>
                                    <label htmlFor="nome">Quem irá receber</label>
                                    <input
                                        type="text"
                                        name="nome"
                                        id="nome"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.nome}
                                        className={checkInputErro("nome") ? "erro" : ""}/>
                                </GrupoInput>
                                <GrupoInput>
                                    <label htmlFor="endereco">Endereço</label>
                                    <input
                                        type="text"
                                        name="endereco"
                                        id="endereco"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.endereco}
                                        className={checkInputErro("endereco") ? "erro" : ""}/>
                                </GrupoInput>
                                <GrupoInput>
                                    <label htmlFor="cidade">Cidade</label>
                                    <input
                                        type="text"
                                        name="cidade"
                                        id="cidade"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.cidade}
                                        className={checkInputErro("cidade") ? "erro" : ""}/>
                                </GrupoInput>
                                <GrupoInput gridColumn="auto auto" gap="34px" maxWidth="155px">
                                    <div>
                                        <label htmlFor="cep">CEP</label>
                                        <InputMask
                                            type="text"
                                            name="cep"
                                            id="cep"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.cep}
                                            className={checkInputErro("cep") ? "erro" : ""}
                                            mask="99999-999"/>
                                    </div>
                                    <div>
                                        <label htmlFor="numero">Número</label>
                                        <input
                                            type="text"
                                            name="numero"
                                            id="numero"
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            value={form.values.numero}
                                            className={checkInputErro("numero") ? "erro" : ""}/>
                                    </div>
                                </GrupoInput>
                                <GrupoInput marginBottom="24px">
                                    <label htmlFor="complemento">Complemento (opicional)</label>
                                    <input
                                        type="text"
                                        name="complemento"
                                        id="complemento"
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        value={form.values.complemento}/>
                                </GrupoInput>

                                <ButtonContainer
                                    type="submit"
                                    title="continuar com o pagamento"
                                    onClick={() => setPagamento(false)}>
                                    Continuar com o pagamento
                                </ButtonContainer>
                                <ButtonContainer
                                    type="button"
                                    title="voltar para o carrinho"
                                    onClick={voltarParaCarrinho}>
                                    Voltar para o carrinho
                                </ButtonContainer>
                            </Linha>
                        </>
                    ) : (
                        <Linha>
                            <h3>Pagamento - Valor a pagar {formataPreco(valorTotal(itemCardapio))}</h3>
                            <GrupoInput>
                                <label htmlFor="nomeNoCartao">Nome no cartão</label>
                                <input
                                    type="text"
                                    name="nomeNoCartao"
                                    id="nomeNoCartao"
                                    value={form.values.nomeNoCartao}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    className={checkInputErro("nomeNoCartao") ? "erro" : ""}/>
                            </GrupoInput>
                            <GrupoInput gridColumn="228px 87px" gap="30px">
                                <div>
                                    <label htmlFor="numeroDoCartao">Número do cartão</label>
                                    <InputMask
                                        type="text"
                                        name="numeroDoCartao"
                                        id="numeroDoCartao"
                                        value={form.values.numeroDoCartao}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputErro("numeroDoCartao") ? "erro" : ""}
                                        mask="9999 9999 9999 9999"/>
                                </div>
                                <div>
                                    <label htmlFor="cvv">CVV</label>
                                    <InputMask
                                        type="text"
                                        name="cvv"
                                        id="cvv"
                                        value={form.values.cvv}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputErro("cvv") ? "erro" : ""}
                                        mask="999"/>
                                </div>
                            </GrupoInput>
                            <GrupoInput
                                gridColumn="auto auto"
                                gap="32px"
                                marginBottom="24px"
                                maxWidth="155px">
                                <div>
                                    <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                                    <InputMask
                                        type="text"
                                        name="mesDeVencimento"
                                        id="mesDeVencimento"
                                        value={form.values.mesDeVencimento}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputErro("mesDeVencimento") ? "erro" : ""}
                                        mask="99"/>
                                </div>
                                <div>
                                    <label htmlFor="anoDeVencimento">Ano de vencimento</label>
                                    <InputMask
                                        type="text"
                                        name="anoDeVencimento"
                                        id="anoDeVencimento"
                                        value={form.values.anoDeVencimento}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={checkInputErro("anoDeVencimento") ? "erro" : ""}
                                        mask="9999"/>
                                </div>
                            </GrupoInput>                        
                            <ButtonContainer
                                type="button"
                                title="Voltar para a edição de pagamento"
                                onClick={() => setPagamento(true)}>
                                Voltar para a edição de endereço
                            </ButtonContainer>
                            <ButtonContainer
                                type="submit"
                                title="Finalizar pagamento"
                                onClick={clickDoButton}>
                                Finalizar Pagamento
                            </ButtonContainer>
                        </Linha>
                    )}
                </CheckContainer>
            </form>            
        )}
        </Container>
    );
    };
