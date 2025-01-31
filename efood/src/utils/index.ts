import { Cardapios } from "../pages/Home"

export const formataPreco = (preco = 0) => {
        return new Intl.NumberFormat('pt-BR' , {
            style: 'currency',
            currency: 'BRL'
        }).format(preco)
    }

export const valorTotal = (itemCardapio: Cardapios[]) => {
    return itemCardapio.reduce((acumulador, valorAtual) => {
        if (valorAtual.preco) {
            return (acumulador += valorAtual.preco)
        }
        return 0
    }, 0)
    }

