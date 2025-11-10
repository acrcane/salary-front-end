import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Table, Col, RawTitle, Raw } from './TableComponent.styled'
import { selectCurrentTable } from '../../redux/tables/selectors'
import {selectAuthUserData} from '../../redux/auth/selectors'
import { apiCurrentTable } from '../../redux/tables/operations'

export const TableComponent = () => {
  const dispatch = useDispatch()
  const currentTable = useSelector(selectCurrentTable)
  const user = useSelector(selectAuthUserData)

  
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(apiCurrentTable(id))
    }
  }, [dispatch, id])
  
  return (
    <Table>
      <thead>
        {currentTable && (
          <Col>
            <RawTitle>{currentTable.title}</RawTitle>
          </Col>
        )}
      </thead>
      <tbody>
        {currentTable?.workSession?.map((session, i) => (
            <Col key={session.id || i}>
              <Raw style={{with: '30px'}}>{session.date.split('T')[0]?.split('-')[2]}</Raw>
              <Raw>{session.checkIn.split('T')[1]?.split('.')[0]}</Raw>
              <Raw>{session.checkOut.split('T')[1]?.split('.')[0]}</Raw>
              <Raw>{Number(session.duration).toFixed(2)}</Raw>
            </Col>
          ))}
      </tbody>
      <tfoot>
        <Col>
        <Raw>Total work hours</Raw>
        <Raw style={{textAlign: 'center'}} colSpan={3}> {currentTable?.workSession?.reduce((a, {duration}) => a + duration, 0).toFixed(2)}</Raw>
        </Col>
        <Col>
        <Raw>Total salary per month</Raw>
        <Raw style={{textAlign: 'center'}} colSpan={3}>{(user.hourlyRate * currentTable?.workSession?.reduce((a, {duration}) => a + duration, 0)).toFixed(2)}</Raw>
        </Col>
      </tfoot>
    </Table>
  )
}
