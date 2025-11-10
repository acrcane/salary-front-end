import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpenModal: false,
    modalType: null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  
  reducers: {
    openModal: (state, action) => {
        state.isOpenModal = true
        state.modalType = action.payload
    },
    closeModal: (state) => {
        state.isOpenModal = false
        state.modalType = null
    }
  }
})
export const {openModal, closeModal} = modalSlice.actions
export const modalReducer = modalSlice.reducer