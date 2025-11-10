import React, { useEffect } from 'react'
import { List, Elem } from './Manager.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectCurrentTable } from '../../redux/tables/selectors'

export const Manager = ({ allUsers }) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const userTable = useSelector(selectCurrentTable)

  // useEffect(() => {
  //   if()
  // }, [dispatch, id])
  const handleGetUser = (userId) => {
    const user = allUsers.find((user) => user._id === userId)
    console.log(user);
    
  }
  return (
    <List>
      {allUsers
        ?.filter((user) => user.role === 'assistent')
        .map((user) => (
          <Elem key={user._id}>
            <button onClick={() => handleGetUser(user._id)}>{user.name}</button>
          </Elem>
        ))}
    </List>
  )
}
