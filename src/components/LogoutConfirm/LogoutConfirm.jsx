import React from 'react'
import { BtnContainer, Container } from './LogoutConfirm.styled'
import { useDispatch } from 'react-redux'
import { apiSignOut } from '../../redux/auth/operations'
import { clearTableId } from '../../redux/tables/tablesSlice'
import { closeModal } from '../../redux/modal/modalSlice'

export const LogoutConfirm = () => {
    const dispatch = useDispatch()
    const handleSignOut = () => {
        dispatch(apiSignOut())
        dispatch(clearTableId())
        dispatch(closeModal())
    }
    const handleClose = () => {
        dispatch(closeModal())
    }
  return (
    <Container>
        <h2>You want to logout?</h2>
    <BtnContainer>
        <button onClick={handleSignOut}>YES</button>
        <button onClick={handleClose}>CANCEL</button>
    </BtnContainer>
    </Container>
  )
}

