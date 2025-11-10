import React, { useEffect } from 'react'
import { Manager, MyCalendar, TableButtons, WorkSession } from '../../components'
import { Container } from './HomePage.styled'
import { selectAuthUserData } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../../redux/manager/selectors'
import { apiAllUsers } from '../../redux/manager/operations'


const HomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectAuthUserData)
  const allUsers = useSelector(selectAllUsers)
  useEffect(() => {
    if(user?.role === 'manager'){
      dispatch(apiAllUsers())
    }
  }, [dispatch, user])
  return (
    <>
    {user?.role === 'manager' ?(
      <Container>
        <Manager allUsers = {allUsers}/>
      </Container>
    ):(
      <Container>
        <TableButtons />
        <WorkSession />
      </Container>
    )}
          <Container>
        <MyCalendar />
      </Container>
  </>
  )
}

export default HomePage
