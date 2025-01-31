import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Cardapios, Restaurantes } from "../../pages/Home"

type CartState = {
    itemRestaurante: Restaurantes[]
    itemCardapio: Cardapios[]
    isOpen: boolean
}

const initialState: CartState = {
    itemRestaurante: [],
    itemCardapio: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Cardapios>) => {
            const cardapio = state.itemCardapio.find((item) => item.id === action.payload.id)

            if (!cardapio) {
                state.itemCardapio.push(action.payload)
            } else {
                alert('A refeição já foi adicionada')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.itemCardapio = state.itemCardapio.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        },
        limparCarrinho: (state) => {
            state.itemCardapio = []
        }
    }
})

export const { add, open, close, remove, limparCarrinho } = cartSlice.actions
export default cartSlice.reducer
