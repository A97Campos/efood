import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cardapios } from "../../pages/Home";

type ModalState = {
    estaAberto: boolean[]
    itemsCardapio: Cardapios[]
}

const initialState: ModalState = {
    estaAberto: [], 
    itemsCardapio: []
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        abrirModal: (state, action: PayloadAction<number>) => {
            state.estaAberto[action.payload] = true
        },
        fecharModal: (state, action: PayloadAction<number>) => {
            state.estaAberto[action.payload] = false
        }
    }
})

export const {abrirModal, fecharModal} = modalSlice.actions
export default modalSlice.reducer