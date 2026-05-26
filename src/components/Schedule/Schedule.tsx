import React from 'react'
import { Main, Table } from './Schedule.styled'
type Props = {
  drName: String
  assistName: String
  starWork: Date
  endWork: Date
  vacation: boolean
  sickLeave: boolean
}

export const Schedule = (props: Props) => {
  return (
    <Main>
        <Table>
        <thead></thead>
        <tbody>
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </Table>
    </Main>
  )
}
