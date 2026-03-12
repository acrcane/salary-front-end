import React from 'react'
import { useSelector } from 'react-redux'
import { Navigation, Link } from './BurgerMenu.styled'
import { selectTableId } from '../../redux/tables/selectors'


export const BurgerMenu = () => {
    const currentTable = useSelector(selectTableId)
  return (
    <Navigation>
        <ul>
            <li>
                <Link to={`/home`}>Home</Link>
            </li>
            <li>
                <Link to={currentTable ? `/table/active-table` : '#'}>Table</Link>
            </li>
        </ul>
    </Navigation>
  )
}
