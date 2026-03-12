import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table, Col, RawTitle, Raw } from './TableComponent.styled'
import { selectCurrentTable } from '../../redux/tables/selectors'
import { selectAuthUserData } from '../../redux/auth/selectors'
import { apiCurrentTable } from '../../redux/tables/operations'

export const TableComponent = () => {
  const dispatch = useDispatch()
  const currentTable = useSelector(selectCurrentTable)
  const user = useSelector(selectAuthUserData)

  useEffect(() => {
    dispatch(apiCurrentTable())
  }, [dispatch])



  return (
    <Table>
      <thead>
        {currentTable && (
          <Col>
            <RawTitle colSpan={4}>{currentTable.title}</RawTitle>
          </Col>
        )}
      </thead>
      <tbody>
        {currentTable?.workSession?.map((session, i) => (
          <Col key={session.id || i}>
            <Raw>
              {new Date(session.date).toLocaleDateString('en-US', {
                weekday: 'long',
                day: '2-digit',
              })}
            </Raw>
            <Raw>
              {session.checkIn
                ? new Date(session.checkIn).toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : '--:--'}
            </Raw>
            <Raw>
              {session.checkOut
                ? new Date(session.checkOut).toLocaleTimeString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : '--:--'}
            </Raw>
            <Raw>{Number(session.duration).toFixed(2)}</Raw>
          </Col>
        ))}
      </tbody>
      <tfoot>
        <Col>
          <Raw>Total work hours</Raw>
          <Raw style={{ textAlign: 'center' }} colSpan={3}>
            {' '}
            {currentTable?.workSession
              ?.reduce((a, { duration }) => a + duration, 0)
              .toFixed(2)}
          </Raw>
        </Col>
        <Col>
          <Raw>Total salary per month</Raw>
          <Raw colSpan={3}>
            {(
              user.hourlyRate *
              currentTable?.workSession?.reduce(
                (a, { duration }) => a + duration,
                0
              )
            ).toFixed(2)}
          </Raw>
        </Col>
      </tfoot>
    </Table>
  )
}
