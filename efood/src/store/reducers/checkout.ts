import { createSlice } from "@reduxjs/toolkit"
import { Cardapios } from "../../pages/Home"

type checkoutState = {
    isOpen: boolean
    items: Cardapios[]
}

const initialState: checkoutState = {
    isOpen: false,
    items: []
}

const checkoutSlice = createSlice({
    name: 'checkout',
    initialState,
    reducers: {
        openCheckout: (state) => {
            state.isOpen = true
        },
        closeCheckout: (state) => {
            state.isOpen = false
        }, limparCheckout: (state) => {
            state.items = []
        }
    }
})

export const { openCheckout, closeCheckout, limparCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
