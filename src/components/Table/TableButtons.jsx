import React from 'react'
import { useDispatch} from 'react-redux'
import { Close, Container, Create } from './TableButtons.styled'
import { apiCloseTable, apiCreateTable } from '../../redux/tables/operations'
import { getPersistTableId } from '../../utils/getPersist'
import { clearTableId } from '../../redux/tables/tablesSlice'
import { toast } from 'react-toastify'



export const TableButtons = () => {
  const dispatch = useDispatch()

  const handleCreateTable = () => {
    dispatch(apiCreateTable()).unwrap().catch(err => {
      if(err?.message === 'You already have an open table'){
        toast.warning('Table already exists')
      } else {
        toast.error("Can't create table")
      }
    })
  }

  const handleCloseTable = () => {
    const id = getPersistTableId()
    dispatch(apiCloseTable(id))
    dispatch(clearTableId())
  }
  
  
  return (
    <Container>
        <Create onClick={handleCreateTable}>Create table</Create>
        <Close onClick={handleCloseTable}>Close table</Close>
    </Container>
  )
}