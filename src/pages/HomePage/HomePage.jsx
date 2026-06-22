import React, { useEffect } from 'react'
import {
  Manager,
  TableButtons,
  WorkSession,
  CustomCalendar
} from '../../components'
import { Section, Aside } from './HomePage.styled'
import { selectAuthUserData } from '../../redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../../redux/manager/selectors'
import { apiAllUsers } from '../../redux/manager/operations'

const HomePage = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectAuthUserData)
  const allUsers = useSelector(selectAllUsers)
  useEffect(() => {
    if (user?.role === 'manager') {
      dispatch(apiAllUsers())
    }
  }, [dispatch, user])

  
  return (
    <Section>
      <div>
        <CustomCalendar />
      </div>
      {user?.role === 'manager' ? (
        <div>
          <Manager allUsers={allUsers} />
        </div>
      ) : (
        <div>
          {/* <TableButtons /> */}
          <WorkSession />
        </div>
      )}
    </Section>
  )
}

export default HomePage
