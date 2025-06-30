import React from 'react'
import { Container } from './UserMenu.styled'
import { useSelector } from 'react-redux'
import { selectAuthUserData } from '../../redux/auth/selectors'

export const UserMenu = () => {
  const user = useSelector(selectAuthUserData)
  return (
    <Container>
      <h2>Name: {user.name}</h2>
      <span>Salary per hour: {user.hourlyRate}zł</span>
    </Container>
  )
}
