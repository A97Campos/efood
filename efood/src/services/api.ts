import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Restaurantes} from '../pages/Home'

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
        })
    })
})

export const { useGetRestauranteQuery, useGetCardapiosQuery } = api

export default api