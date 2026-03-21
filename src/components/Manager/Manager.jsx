import React from 'react'
import { useDispatch } from 'react-redux'
import { List, Elem } from './Manager.styled'
import { openModal } from '../../redux/modal/modalSlice'
import { apiLastClosedTable } from '../../redux/manager/operations'


export const Manager = ({ allUsers }) => {
  const dispatch = useDispatch()

  const handleOpenTable = (userId) => {
    dispatch(openModal('lastClosedTable'))  
    dispatch(apiLastClosedTable(userId))
  }
  
  return (
    <List>
      {allUsers
        ?.filter((user) => user.role === 'assistent')
        .map((user) => (
          <Elem key={user._id}>
            <button onClick={() => handleOpenTable(user._id)}>{user.name}</button>
          </Elem>
        ))}
    </List>
  )
}
