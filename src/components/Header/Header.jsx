import { useSelector, useDispatch } from 'react-redux'
import { Popup } from '../Popup/Popup'
import {
  Container,
  Link,
  LetterIcon,
  BurgerButton,
  DesktopNav,
} from './Header.styled'
import { selectTableId } from '../../redux/tables/selectors'
import { openModal } from '../../redux/modal/modalSlice'

export const Header = () => {
  const currentTable = useSelector(selectTableId)
  const dispatch = useDispatch()

  const handleOpenMenu = () => {
    dispatch(openModal('burgerMenu'))
  }
  const handleOpenMessage = () => {
    dispatch(openModal('message'))
  }
  return (
    <Container>
      <BurgerButton onClick={handleOpenMenu}>
        MOB
      </BurgerButton>
      <DesktopNav>
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
      </DesktopNav>
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
