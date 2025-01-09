import { createSlice } from "@reduxjs/toolkit";
import { Cardapios } from "../../pages/Home";

type ModalState = {
    estaAberto: boolean
    itemsCardapio: Cardapios[]
}

const initialState: ModalState = {
    estaAberto: false, 
    itemsCardapio: []
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        abrirModal: (state) => {
            state.estaAberto = true
        },
        fecharModal: (state) => {
            state.estaAberto = false
        }
    }
})

export const {abrirModal, fecharModal} = modalSlice.actions
export default modalSlice.reducer