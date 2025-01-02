import { createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Cardapios, Restaurantes } from "../../pages/Home"

type CartState = {
    itemsRestaurante: Restaurantes[] 
    itemsCardapio: Cardapios[]
    isOpen: boolean
}

const initialState: CartState = {
    itemsRestaurante: [],
    itemsCardapio: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { open, close } = cartSlice.actions
export default cartSlice.reducer
