import React, { useEffect } from 'react'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Main } from './Layout.styled'
import { Header, Modal } from '../index.js'
import { selectModalIsOpenModal } from '../../redux/modal/selectors.js'
import { useSelector } from 'react-redux'
import { UserMenu } from '../UserMenu/UserMenu.jsx'

const Layout = () => {
  const isOpen = useSelector(selectModalIsOpenModal)
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
              <UserMenu />
            </Modal>
          )}
          <Outlet />
        </Main>
      </Suspense>
    </>
  )
}

export default Layout
