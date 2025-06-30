import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {
  selectAuthIsLoggedIn,
  // selectAuthIsLoading
} from '../redux/auth/selectors'

const PrivateRoute = ({ element, redirectTo = '/' }) => {
  // const isLoading = useSelector(selectAuthIsLoading)
  const isLoggedIn = useSelector(selectAuthIsLoggedIn)

  return isLoggedIn ? element : <Navigate to={redirectTo} />
}

export default PrivateRoute
