import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Close, Container, Create } from './TableButtons.styled'
import { apiCloseTable, apiCreateTable } from '../../redux/tables/operations'
import { selectTableId } from '../../redux/tables/selectors'
import { clearTableId } from '../../redux/tables/tablesSlice'
import { toast } from 'react-toastify'

export const TableButtons = () => {
  const dispatch = useDispatch()
  const id = useSelector(selectTableId)

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

  const handleCloseTable = () => {
    dispatch(apiCloseTable(id))
    dispatch(clearTableId())
  }
//тут просто prettier нажав
  return (
    <Container>
      <Create onClick={handleCreateTable}>Create table</Create>
      <Close onClick={handleCloseTable}>Close table</Close>
    </Container>
  )
}
