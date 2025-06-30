import React from 'react'
import { useSelector } from 'react-redux'
import { Popup } from '../Popup/Popup'
import { Container, Link } from './Header.styled'
import {
  selectTableId,
  // selectCurrentTable
} from '../../redux/tables/selectors'

export const Header = () => {
  const currentTable = useSelector(selectTableId)

  return (
    <Container>
      <nav>
        <Link to={`/home`}>Home</Link>
        {currentTable ? (
          <Link to={`/table/${currentTable}`}>Table</Link>
        ) : (
          <div style={{ color: 'red' }}>SOMETHING WRONG</div>
        )}
      </nav>
      <Popup />
    </Container>
  )
}
