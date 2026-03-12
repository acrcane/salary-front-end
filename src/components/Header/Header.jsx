import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Popup } from '../Popup/Popup'
import { Container, Link, LetterIcon } from './Header.styled'
import { selectTableId } from '../../redux/tables/selectors'
import { openModal } from '../../redux/modal/modalSlice'

export const Header = () => {
  const BREAKPOINT = 1024
  const [isMobile, setIsMobile] = useState(window.innerWidth <= BREAKPOINT)
  const currentTable = useSelector(selectTableId)
  const dispatch = useDispatch()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINT)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleOpenMenu = () => {
    dispatch(openModal('burgerMenu'))
  }
  const handleOpenMessage = () => {
    dispatch(openModal('message'))
  }
  return (
    <Container>
      {isMobile ? (
        <button onClick={handleOpenMenu}>MOB</button>
      ) : (
        <nav>
          <Link to={`/home`} end>
            Home
          </Link>
          <Link
            to={currentTable ? `/table/active-table` : '#'}
            style={{
              pointerEvents: currentTable ? 'auto' : 'none',
              opacity: currentTable ? 1 : 0.5,
              color: currentTable ? 'var(--white)' : '#ccc',
            }}
          >
            Table
          </Link>
          <Link to={`/user-profile`}>Profile</Link>
        </nav>
      )}
      <button onClick={handleOpenMessage}>
        <LetterIcon>
          <use
            href={`${
              import.meta.env.BASE_URL
            }assets/symbol-defs.svg#icon-letter`}
          />
        </LetterIcon>
      </button>
      <Popup />
    </Container>
  )
}
