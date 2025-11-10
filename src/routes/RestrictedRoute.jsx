import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectAuthToken,
} from '../redux/auth/selectors'
import { Navigate } from 'react-router-dom'

const RestrictedRoute = ({ element, redirectTo = '/' }) => {

  const isLoggedIn = useSelector(selectAuthToken)

  return isLoggedIn ? <Navigate to={redirectTo} /> : element
}

export default RestrictedRoute

