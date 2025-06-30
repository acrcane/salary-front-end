import React from 'react'
import { CheckIn, CheckOut, Container } from './WorkSession.styled'
import { getPersistTableId } from '../../utils/getPersist'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCheckIn,
  setTableId,
  setCheckOut,
} from '../../redux/workSession/workSessionSlice'
import { apiWorkSession } from '../../redux/workSession/operations'
import { selectWorkSessionCheckIn } from '../../redux/workSession/selectors'

export const WorkSession = () => {
  const dispatch = useDispatch()
  const checkIn = useSelector(selectWorkSessionCheckIn)

  const handleCheckIn = () => {
    const time = new Date().toISOString()
    dispatch(setCheckIn(time))

  }
  const handleCheckOut = () => {
    const time = new Date().toISOString()
    const tableId = getPersistTableId()

    dispatch(setTableId(tableId))
    dispatch(setCheckOut(time))

    dispatch(
      apiWorkSession({
        checkIn,
        tableId,
        checkOut: time,
      })
    )
  }

  return (
    <Container>
      <CheckIn onClick={handleCheckIn}>Check In</CheckIn>
      <CheckOut onClick={handleCheckOut}>Check Out</CheckOut>
    </Container>
  )
}
