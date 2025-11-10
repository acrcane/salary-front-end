import React, { useEffect, useState } from 'react'
import { Backdrop } from './Backdrop'
import { HeadContainer, ModalWrap } from './Modal.styled'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/modal/modalSlice'
import { selectModalIsOpenModal } from '../../redux/modal/selectors'

export const Modal = ({ children }) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectModalIsOpenModal)
  const [showContent, setShowContent] = useState(false)
  useEffect(() => {
    console.log('Modal children:', children);
    if (isOpen) {
      setShowContent(true)
    } else {
      const timer = setTimeout(() => {
        setShowContent(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen, children])
  const handleClose = () => {
    setShowContent(false)
    setTimeout(() => {
      dispatch(closeModal())
    }, 300)
  }
  if (!isOpen && !showContent) return null
  return (
    <>
      <Backdrop onClick={handleClose} />
      <ModalWrap $showContent={showContent}>
        <HeadContainer>
          <h2>Settings</h2>
          <button onClick={handleClose}>X</button>
        </HeadContainer>
        {children}
        {/* {React.isValidElement(children) &&
          React.cloneElement(children, { onClose: handleClose })} */}
      </ModalWrap>
    </>
  )
}
