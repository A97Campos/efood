import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurantes} from '../pages/Home'

type Product = {
    id: number
    price: number
}

type PurchasePayload = {
    products: Product[]
    delivery: {
        receiver: string
        address: {
            description: string
            city: string
            zipCode: string
            number: number
            complement?: string
        }
    }
    payment: {
        card: {
            name: string
            number: string
            code: number
            expires: {
                month: number
                year: number
            }
        }
    }

}

type PurchaseResponse = {
    orderId: string
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
        purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
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