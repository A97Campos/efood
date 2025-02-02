import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ButtonContainer } from "../Button/style";
import { CheckContainer, Container, GrupoInput, Input, Linha, Overlay } from "./style";
import { RootReducer } from "../../store";
import { closeCheckout, limparCheckout } from "../../store/reducers/checkout";
import { limparCarrinho, open } from "../../store/reducers/cart";
import { usePurchaseMutation } from "../../services/api";
import { formataPreco, valorTotal } from "../../utils";

export const Checkout = () => {
    const { isOpen } = useSelector((state: RootReducer) => state.checkout);

    const { itemCardapio } = useSelector((state: RootReducer) => state.cart);

    const [purchase, { isLoading, isSuccess, data }] = usePurchaseMutation();

    const [pagamento, setPagamento] = useState(true);

    const dispatch = useDispatch();

    const fecharCheckout = () => {
    dispatch(closeCheckout());
    };

    const voltarParaCarrinho = () => {
    dispatch(closeCheckout());
    dispatch(open());
    };

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
            .min(8, "O campo precisa ter 8 caracteres")
            .max(8, "O campo precisa ter 8 caracteres")
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
            nome: values.nome,
            endereco: {
                rua: values.endereco,
                cidade: values.cidade,
                cep: values.cep,
                numero: values.numero,
                complemento: values.complemento,
            },
        },
        pagamento: {
            cartao: {
                nomeNoCartao: values.nomeNoCartao,
                numeroNoCartao: values.numeroDoCartao,
                cvv: Number(values.cvv),
                expira: {
                    mes: Number(values.mesDeVencimento),
                    ano: Number(values.anoDeVencimento),
                }
            }
        },
        produtos: itemCardapio.map((item) => ({
            id: item.id,
            preco: item.preco,
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
            <Linha>
            <h3>Pedido realizado - order_id</h3>
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
            <ButtonContainer type="button" title="concluir">
                Concluir
            </ButtonContainer>
            </Linha>
        ) : (
            <CheckContainer>
                {pagamento ? (
                <form onSubmit={form.handleSubmit}>
                    <h3>Entrega</h3>
                    <Linha>
                        <GrupoInput>
                        <label htmlFor="nome">Quem irá receber</label>
                        <Input
                            type="text"
                            name="nome"
                            id="nome"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.nome}
                            className={checkInputErro("nome") ? "erro" : ""}
                        />
                        </GrupoInput>
                        <GrupoInput>
                        <label htmlFor="endereco">Endereço</label>
                        <Input
                            type="text"
                            name="endereco"
                            id="endereco"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.endereco}
                            className={checkInputErro("endereco") ? "erro" : ""}
                        />
                        </GrupoInput>
                        <GrupoInput>
                        <label htmlFor="cidade">Cidade</label>
                        <Input
                            type="text"
                            name="cidade"
                            id="cidade"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.cidade}
                            className={checkInputErro("cidade") ? "erro" : ""}
                        />
                        </GrupoInput>
                        <GrupoInput gridColumn="auto auto" gap="34px">
                        <div>
                            <label htmlFor="cep">CEP</label>
                            <Input
                            type="text"
                            name="cep"
                            id="cep"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.cep}
                            className={checkInputErro("cep") ? "erro" : ""}
                            maxWidth="155px"
                            />
                        </div>
                        <div>
                            <label htmlFor="numero">Número</label>
                            <Input
                            type="text"
                            name="numero"
                            id="numero"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.numero}
                            className={checkInputErro("numero") ? "erro" : ""}
                            maxWidth="155px"
                            />
                        </div>
                        </GrupoInput>
                        <GrupoInput marginBottom="24px">
                        <label htmlFor="complemento">Complemento (opicional)</label>
                        <Input
                            type="text"
                            name="complemento"
                            id="complemento"
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            value={form.values.complemento}
                        />
                        </GrupoInput>

                        <ButtonContainer
                        type="submit"
                        title="continuar com o pagamento"
                        onClick={clickDoButton}
                        >
                        Continuar com o pagamento
                        </ButtonContainer>
                        <ButtonContainer
                        type="button"
                        title="voltar para o carrinho"
                        onClick={voltarParaCarrinho}
                        >
                        Voltar para o carrinho
                        </ButtonContainer>
                    </Linha>
                </ form>
                ) : (
                <form onSubmit={form.handleSubmit}>
                    <Linha>
                        <h3>Pagamento - Valor a pagar {formataPreco(valorTotal(itemCardapio))}</h3>
                        <GrupoInput>
                        <label htmlFor="nomeNoCartao">Nome no cartão</label>
                        <Input
                            type="text"
                            name="nomeNoCartao"
                            id="nomeNoCartao"
                            value={form.values.nomeNoCartao}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputErro("nomeNoCartao") ? "erro" : ""}
                        />
                        </GrupoInput>
                        <GrupoInput gridColumn="auto auto" gap="30px">
                        <div>
                            <label htmlFor="numeroDoCartao">Número do cartão</label>
                            <Input
                            type="text"
                            name="numeroDoCartao"
                            id="numeroDoCartao"
                            value={form.values.numeroDoCartao}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputErro("numeroDoCartao") ? "erro" : ""}
                            maxWidth="228px"
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <Input
                            type="text"
                            name="cvv"
                            id="cvv"
                            value={form.values.cvv}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={checkInputErro("cvv") ? "erro" : ""}
                            maxWidth="87px"
                            />
                        </div>
                        </GrupoInput>
                        <GrupoInput
                        gridColumn="auto auto"
                        gap="32px"
                        marginBottom="24px"
                        >
                        <div>
                            <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                            <Input
                            type="text"
                            name="mesDeVencimento"
                            id="mesDeVencimento"
                            value={form.values.mesDeVencimento}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                                checkInputErro("mesDeVencimento") ? "erro" : ""
                            }
                            maxWidth="155px"
                            />
                        </div>
                        <div>
                            <label htmlFor="anoDeVencimento">Ano de vencimento</label>
                            <Input
                            type="text"
                            name="anoDeVencimento"
                            id="anoDeVencimento"
                            value={form.values.anoDeVencimento}
                            onChange={form.handleChange}
                            onBlur={form.handleBlur}
                            className={
                                checkInputErro("anoDeVencimento") ? "erro" : ""
                            }
                            maxWidth="155px"
                            />
                        </div>
                        </GrupoInput>

                        <ButtonContainer
                            type="submit"
                            title="Finalizar pagamento">

                            Finalizar Pagamento
                        </ButtonContainer>
                        <ButtonContainer
                        type="button"
                        title="Voltar para a edição de pagamento"
                        onClick={() => setPagamento(true)}
                        >
                        Voltar para a edição de endereço
                        </ButtonContainer>
                    </Linha>
                </form>
                )}
            </CheckContainer>
        )}
        </Container>
    );
    };
