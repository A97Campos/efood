export const Checkout = () => {
    return (
        <>
            <div>
                <h3>Entrega</h3>
                <form>
                    <div>
                        <div>
                            <label htmlFor="nome">Quem irá receber</label>
                            <input type="text" name="nome" id="nome" />
                        </div>
                        <div>
                            <label htmlFor="endereco">Endereço</label>
                            <input type="text" name="endereco" id="endereco" />
                        </div>
                        <div>
                            <label htmlFor="cidade">Cidade</label>
                            <input type="text" name="cidade" id="cidade" />
                        </div>
                        <div>
                            <label htmlFor="cep">CEP</label>
                            <input type="text" name="cep" id="cep" />
                        </div>
                        <div>
                            <label htmlFor="numero">Número</label>
                            <input type="text" name="numero" id="numero" />
                        </div>
                        <div>
                            <label htmlFor="complemento">Complemento (opicional)</label>
                            <input type="text" name="complemento" id="complemento" />
                        </div>

                        <button>Continuar com o pagamento</button>
                        <button>Voltar para o carrinho</button>
                    </div>

                    <div>
                        <h3>Pagamento - Valor a pagar R$ 190,90</h3>
                        <div>
                            <label htmlFor="nomeNoCartao">Nome no cartão</label>
                            <input type="text" name="nomeNoCartao" id="nomeNoCartao" />
                        </div>
                        <div>
                            <label htmlFor="numeroDoCartao">Número do cartão</label>
                            <input type="text" name="numeroDoCartao" id="numeroDoCartao" />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" name="cvv" id="cvv" />
                        </div>
                        <div>
                            <label htmlFor="mesDeVencimento">Mês de vencimento</label>
                            <input type="text" name="mesDeVencimento" id="mesDeVencimento" />
                        </div>
                        <div>
                            <label htmlFor="anoDeVencimento">Ano de vencimento</label>
                            <input type="text" name="anoDeVencimento" id="anoDeVencimento" />
                        </div>

                        <button>Finalizar Pagamento</button>
                        <button>Voltar para a edição de endereço</button>
                    </div>
                </form>

                <div>
                    <h3>Pedido realizado - order_id</h3>
                    <p>Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.</p>
                    <p>Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.</p>
                    <p>Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.</p>
                    <p>Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!</p>
                    <button>Concluir</button>
                </div>
            </div>
            
        </>

    )
}