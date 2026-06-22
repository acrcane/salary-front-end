import { useSelector, useDispatch } from 'react-redux'
import { Popup } from '../Popup/Popup'
import {
  Container,
  Link,
  LetterIcon,
  BurgerButton,
  DesktopNav,
  MessageBtn,
  BurgerIcon,
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
        <BurgerIcon>
          <use
            href={`${import.meta.env.BASE_URL}assets/symbol-defs.svg#icon-menu`}
          />
        </BurgerIcon>
      </BurgerButton>
      <DesktopNav>
        <Link to={`/home`} end>
          Home
        </Link>
        <Link to={currentTable ? `/table/active-table` : '#'}>Table</Link>
        <Link to={`/user-profile`}>Profile</Link>
        <MessageBtn onClick={handleOpenMessage}>
          <LetterIcon>
            <use
              href={`${
                import.meta.env.BASE_URL
              }assets/symbol-defs.svg#icon-letter`}
            />
          </LetterIcon>
        </MessageBtn>
        <Popup />
      </DesktopNav>
    </Container>
  )
}
