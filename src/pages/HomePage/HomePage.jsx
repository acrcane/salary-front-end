import React from 'react'
import { TableButtons, TableComponent, WorkSession } from '../../components'
import { Container } from './HomePage.styled'
import { selectAuthUserData } from '../../redux/auth/selectors'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const user = useSelector(selectAuthUserData)
  
  return (
    <>
    {user?.role === 'manager' ?(
      <div style={{color: 'red'}}>I'm admin</div>
    ):(
      <Container>
        <TableButtons />
        <WorkSession />
      </Container>
    )}
  </>
  )
}

export default HomePage
