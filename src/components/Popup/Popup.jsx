import React from 'react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { PopupTriger, TrigerBtn, ActionContainer, Icon } from './Popup.styled'
import { apiSignOut } from '../../redux/auth/operations'
import { openModal } from '../../redux/modal/modalSlice'
export const Popup = () => {
  const popupRef = useRef(null)
    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(apiSignOut())
        popupRef.current.close()
    }

    const handleOpen = () => {
      dispatch(openModal())
    }
  return (
    <>
      <PopupTriger
        ref={popupRef}
        trigger={<TrigerBtn><Icon><use href="/assets/symbol-defs.svg#icon-settings" /></Icon></TrigerBtn>}
        on="click"
        position="bottom right"
        closeOnDocumentClick="true"
        arrow="false"
      >
        <ActionContainer>
            <button onClick={handleOpen}>Settings</button>
            <button onClick={handleSignOut}>Log Out</button>
        </ActionContainer>
      </PopupTriger>
    </>
  )
}
