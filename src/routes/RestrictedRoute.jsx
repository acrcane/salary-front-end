import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectAuthIsLoggedIn } from '../redux/auth/selectors'

const RestrictedRoute = ({ element, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)

  return isLoggedIn ? <Navigate to={redirectTo} /> : element
}

export default RestrictedRoute
