import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurantes} from '../pages/Home'

type Produto = {
    id: number
    preco: number
}

type PurchasePayload = {
    produtos: Produto[]
    delivery: {
        nome: string
        endereco: {
            rua: string
            cidade: string
            cep: string
            numero: string
            complemento?: string
        }
    },
    pagamento: {
        cartao: {
            nomeNoCartao: string
            numeroNoCartao: string
            cvv: number
            expira: {
                mes: number
                ano: number
            }
        }
    }
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
    }),
    endpoints: (builder) => ({
        getRestaurante: builder.query<Restaurantes[], void>({
            query: () => '/restaurantes'
        }), 
        getCardapios: builder.query<Restaurantes, string>({
            query: (id) => `/restaurantes/${id}`
        }),
        purchase: builder.mutation<any,PurchasePayload>({
            query: (body) => ({
                url: '/checkout',
                method: 'Post',
                body
            })
        })
    })
})

export const { useGetRestauranteQuery, useGetCardapiosQuery, usePurchaseMutation } = api

export default api