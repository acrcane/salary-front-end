import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigation, Link, Icon } from './BurgerMenu.styled'
import { selectTableId } from '../../redux/tables/selectors'
import { closeModal } from '../../redux/modal/modalSlice'

export const BurgerMenu = () => {
  const dispatch = useDispatch()
  const currentTable = useSelector(selectTableId)
  const handleNavigate = () => {
    dispatch(closeModal())
  }
  return (
    <Navigation>
      <ul>
        <li>
          <Link to="/home" onClick={handleNavigate}>
            <Icon><use href={`${import.meta.env.BASE_URL}assets/symbol-defs.svg#icon-home2`}/></Icon>
            Home
          </Link>
        </li>
        <li>
          <Link
            to={currentTable ? '/table/active-table' : '#' }
            $disabled={!currentTable}
            onClick={e => {
              if (!currentTable) {
                e.preventDefault()
                return
              }
              handleNavigate()
            }}
          >
            <Icon><use href={`${import.meta.env.BASE_URL}assets/symbol-defs.svg#icon-table2`}/></Icon>
            Table
          </Link>
        </li>
      </ul>
    </Navigation>
  )
}