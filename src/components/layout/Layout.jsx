import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Main } from './Layout.styled'
import { BurgerMenu, Header, LastTable, Modal } from '../index.js'
import {
  selectModalIsOpenModal,
  selectModalType,
} from '../../redux/modal/selectors.js'
import { useSelector } from 'react-redux'
import { UserMenu } from '../UserMenu/UserMenu.jsx'
import { LogoutConfirm } from '../LogoutConfirm/LogoutConfirm.jsx'
import { Message } from '../index.js'

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
          {isOpen &&
            ReactDOM.createPortal(
              <Modal>
                {modalType === 'settings' && <UserMenu />}
                {modalType === 'logout' && <LogoutConfirm />}
                {modalType === 'message' && <Message />}
                {modalType === 'burgerMenu' && <BurgerMenu />}
                {modalType === 'lastClosedTable' && <LastTable />}
              </Modal>,
              document.body
            )}
          <Outlet />
        </Main>
      </Suspense>
    </>
  )
}

export default Layout
