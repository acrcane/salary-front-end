import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Main } from './Layout.styled'
import { Header, Modal } from '../index.js'
import {
  selectModalIsOpenModal,
  selectModalType,
} from '../../redux/modal/selectors.js'
import { useSelector } from 'react-redux'
import { MODAL_CONFIG } from '../../utils/modalConfig.js'

const Layout = () => {
  const isOpen = useSelector(selectModalIsOpenModal)
  const modalType = useSelector(selectModalType)

  const config = MODAL_CONFIG[modalType]
  const Component = config?.component

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
    setVh()
    window.addEventListener('resize', setVh)
    return () => window.removeEventListener('resize', setVh)
  }, [])

  return (
    <>
      <Header />
      <Suspense>
        <Main>
          {isOpen &&
            ReactDOM.createPortal(
              <Modal title={config?.title}>{Component && <Component />}</Modal>,
              document.body
            )}
          <Outlet />
        </Main>
      </Suspense>
    </>
  )
}

export default Layout
