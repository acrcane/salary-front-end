import React from 'react'
import { useSelector } from 'react-redux'
import { Table, Col, RawTitle, Raw } from './TableComponent.styled'
import { selectLastClosedTable } from '../../redux/manager/selectors'

export const LastTable = () => {
  const closedTable = useSelector(selectLastClosedTable)
  console.log(closedTable)

  return (
    <Table>
      <thead>
        {closedTable && (
          <Col>
            <RawTitle colSpan={4}>{closedTable.title}</RawTitle>
          </Col>
        )}
      </thead>
      <tbody>
        {closedTable?.workSession?.map((session, i) => (
          <Col key={session.date || i}>
            <Raw>{session.date.split('T')[0].split('-')[2]}</Raw>
            <Raw>
              {session.checkIn.split('T')[1].split(':').slice(0, 2).join(':')}
            </Raw>
            <Raw>
              {session.checkOut.split('T')[1].split(':').slice(0, 2).join(':')}
            </Raw>
            <Raw>{session.duration.toFixed(2)}</Raw>
          </Col>
        ))}
      </tbody>
      <tfoot>
        <Col>
          <Raw colSpan={3}>Total work hours</Raw>
        </Col>
      </tfoot>
    </Table>
  )
}
