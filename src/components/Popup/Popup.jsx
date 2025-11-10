import React from 'react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { PopupTriger, TrigerBtn, ActionContainer, Icon } from './Popup.styled'
// import { apiSignOut } from '../../redux/auth/operations'
import { openModal } from '../../redux/modal/modalSlice'
// import { clearTableId } from '../../redux/tables/tablesSlice'
export const Popup = () => {
  const popupRef = useRef(null)
    const dispatch = useDispatch()
    const handleOpenSettings = () => {
      dispatch(openModal('settings'))
    }
    const handleConfirm = () => {
      dispatch(openModal('logout'))
    }

    // const handleOpen = () => {
    //   dispatch(openModal())
    // }
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
            <button onClick={handleOpenSettings}>Settings</button>
            <button onClick={handleConfirm}>Log Out</button>
        </ActionContainer>
      </PopupTriger>
    </>
  )
}
