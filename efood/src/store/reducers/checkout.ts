import { createSlice } from "@reduxjs/toolkit"

type checkoutState = {
    isOpen: boolean
}

const initialState: checkoutState = {
    isOpen: false
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
        }
    }
})

export const { openCheckout, closeCheckout } = checkoutSlice.actions
export default checkoutSlice.reducer
