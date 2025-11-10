import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Main } from './Layout.styled'
import { Header, Modal } from '../index.js'
import { selectModalIsOpenModal, selectModalType } from '../../redux/modal/selectors.js'
import { useSelector } from 'react-redux'
import { UserMenu } from '../UserMenu/UserMenu.jsx'
import { LogoutConfirm } from '../LogoutConfirm/LogoutConfirm.jsx'

const Layout = () => {
  const isOpen = useSelector(selectModalIsOpenModal)
  const modalType = useSelector(selectModalType)
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
          {isOpen && (
            <Modal>
              {modalType === 'settings' && (<UserMenu />)}
              {modalType === 'logout' && (<LogoutConfirm />)}
            </Modal>
          )}
          <Outlet />
        </Main>
      </Suspense>
    </>
  )
}

export default Layout
