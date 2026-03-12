import React from 'react'
import { useDispatch } from 'react-redux'
import { useRef } from 'react'
import { PopupTriger, TrigerBtn, ActionContainer, Icon } from './Popup.styled'
import { openModal } from '../../redux/modal/modalSlice'
export const Popup = () => {
  const popupRef = useRef(null)
  const dispatch = useDispatch()

  return (
    <>
      <PopupTriger
        ref={popupRef}
        trigger={
          <TrigerBtn>
            <Icon>
              <use
                href={`${
                  import.meta.env.BASE_URL
                }assets/symbol-defs.svg#icon-settings`}
              />
            </Icon>
          </TrigerBtn>
        }
        on="click"
        position="bottom right"
        closeOnDocumentClick="true"
        arrow="false"
      >
        {(close) => (
          <ActionContainer>
            <button
              onClick={() => {
                dispatch(openModal('settings'))
                close()
              }}
            >
              Settings
            </button>
            <button
              onClick={() => {
                dispatch(openModal('logout'))
                close()
              }}
            >
              Log out
            </button>
          </ActionContainer>
        )}
      </PopupTriger>
    </>
  )
}
