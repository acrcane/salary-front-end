import React, { useCallback, useEffect, useState } from 'react'
import { Backdrop } from './Backdrop'
import { HeadContainer, ModalWrap } from './Modal.styled'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/modal/modalSlice'
import { selectModalIsOpenModal } from '../../redux/modal/selectors'
import { selectModalType } from '../../redux/modal/selectors'

export const Modal = ({ children, title }) => {
  const dispatch = useDispatch()
  const isOpen = useSelector(selectModalIsOpenModal)
  const modalType = useSelector(selectModalType)
  const [showContent, setShowContent] = useState(false)
  
  useEffect(() => {
    if (isOpen) {
      setShowContent(true)
    } else {
      const timer = setTimeout(() => {
        setShowContent(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])
  useEffect(() => {
    if (showContent) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showContent])
  const handleClose = useCallback(() => {
    setShowContent(false)
    setTimeout(() => {
      dispatch(closeModal())
    }, 300)
  }, [dispatch])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleClose])
  if (!isOpen && !showContent) return null
  return (
    <>
      <Backdrop onClick={handleClose} />
      <ModalWrap $showContent={showContent} $type={modalType}>
          <HeadContainer>
            <h2>{title}</h2>
            <button onClick={handleClose}>
              <svg>
                <use
                  href={`${
                    import.meta.env.BASE_URL
                  }assets/symbol-defs.svg#icon-close-x`}
                />
              </svg>
            </button>
          </HeadContainer>
        {children}
      </ModalWrap>
    </>
  )
}
