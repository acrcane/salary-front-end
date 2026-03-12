import React from 'react'
import { CheckIn, CheckOut, Container } from './WorkSession.styled'
// import { getPersistTableId } from '../../utils/getPersist'
import { useDispatch, 
  useSelector 
} from 'react-redux'
import { apiCheckIn, apiCheckOut } from '../../redux/workSession/operations'
import { 
  selectSessionId, 
  // selectorSession 
} from '../../redux/workSession/selectors'
import { selectTableId } from '../../redux/tables/selectors'


export const WorkSession = () => {
  const dispatch = useDispatch()
  const sessionId = useSelector(selectSessionId)
  const tableId = useSelector(selectTableId)

  const handleCheckIn = () => {
    const time = new Date().toISOString()
    dispatch(apiCheckIn({
      checkIn: time,
      tableId
    }))
  }
  const handleCheckOut = () => {
    const time = new Date().toISOString()

    dispatch(apiCheckOut({
      checkOut: time,
      sessionId
    }))
  }

  return (
    <Container>
      <CheckIn onClick={handleCheckIn}>Check In</CheckIn>
      <CheckOut onClick={handleCheckOut}>Check Out</CheckOut>
    </Container>
  )
}
