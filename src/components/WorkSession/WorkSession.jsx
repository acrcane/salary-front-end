import React from 'react'
import {
  CheckIn,
  CheckOut,
  Container,
  CreateTable,
  CloseTable,
} from './WorkSession.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { apiCheckIn, apiCheckOut } from '../../redux/workSession/operations'
import { apiCreateTable, apiCloseTable } from '../../redux/tables/operations'
import { selectSessionId } from '../../redux/workSession/selectors'
import { selectTableId } from '../../redux/tables/selectors'
import { clearTableId } from '../../redux/tables/tablesSlice'

export const WorkSession = () => {
  const dispatch = useDispatch()
  const sessionId = useSelector(selectSessionId)
  const tableId = useSelector(selectTableId)

  const handleCreateTable = () => {
    dispatch(apiCreateTable())
      .unwrap()
      .catch((err) => {
        if (err?.message === 'You already have an open table') {
          toast.warning('Table already exists')
        } else {
          toast.error("Can't create table")
        }
      })
  }

  const handleCloseTable = async () => {
    await dispatch(apiCloseTable(tableId)).unwrap()
    dispatch(clearTableId())
  }
  const handleCheckIn = () => {
    const time = new Date().toISOString()
    dispatch(
      apiCheckIn({
        checkIn: time,
        tableId,
      })
    )
  }
  const handleCheckOut = () => {
    const time = new Date().toISOString()

    dispatch(
      apiCheckOut({
        checkOut: time,
        sessionId,
      })
    )
  }

  if (!tableId)
    return (
      <Container>
        <CreateTable onClick={handleCreateTable}>Create tabel</CreateTable>
      </Container>
    )

  if (!sessionId)
    return (
      <Container>
        <CheckIn onClick={handleCheckIn}>Check In</CheckIn>
        <CloseTable onClick={handleCloseTable}>Close tabel</CloseTable>
      </Container>
    )

  return (
    <Container>
      <CheckOut onClick={handleCheckOut}>Check Out</CheckOut>
      <button>Pause</button>
      <CloseTable onClick={handleCloseTable}>Close tabel</CloseTable>
    </Container>
  )
}
