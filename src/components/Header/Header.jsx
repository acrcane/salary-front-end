import React from 'react'
import { useSelector } from 'react-redux'
import { Popup } from '../Popup/Popup'
import { Container, Link } from './Header.styled'
import { selectTableId } from '../../redux/tables/selectors'

export const Header = () => {
  const currentTable = useSelector(selectTableId)

  return (
    <Container>
      <nav>
        <Link to={`/home`} end>Home</Link>
        <Link to={currentTable ? `/table/${currentTable}` : '#'}
        $disabled={!currentTable}
        onClick={e => {if(!currentTable) e.preventDefault()}}
        aria-disabled={!currentTable}
        tabIndex={currentTable ? 0 : -1}
        end >Table</Link>
      </nav>
      <Popup />
    </Container>
  )
}
