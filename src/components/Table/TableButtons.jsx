import React from 'react'
import { useDispatch} from 'react-redux'
import { Close, Container, Create } from './TableButtons.styled'
import { apiCloseTable, apiCreateTable } from '../../redux/tables/operations'
import { getPersistTableId } from '../../utils/getPersist'



export const TableButtons = () => {
  const dispatch = useDispatch()

  const handleCreateTable = () => {
    dispatch(apiCreateTable())
  }

  const handleCloseTable = () => {
    const id = getPersistTableId()

    dispatch(apiCloseTable(id))
  }
  
  
  return (
    <Container>
        <Create onClick={handleCreateTable}>Create table</Create>
        <Close onClick={handleCloseTable}>Close table</Close>
    </Container>
  )
}