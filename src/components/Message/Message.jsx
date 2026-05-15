import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Title, InputWrap } from './Message.styles'
import { apiVacationRequest } from '../../redux/message/operations'
import { selectAuthUserData } from '../../redux/auth/selectors'
import { toast } from 'react-toastify'

export const Message = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectAuthUserData)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const start = formData.get('start') || ''
    const end = formData.get('end') || ''
    if (!start || !end) {
      toast.error('The form is not filled out')
      return
    }
    if (new Date(end) < new Date(start)) {
      toast.error('End date cannot be earlier than start date')
      return
    }
    const data = {
      userName: user?.name,
      startVacation: start,
      endVacation: end,
    }
    try {
      await dispatch(apiVacationRequest(data))
      form.reset()
      toast.success('Request sent')
    } catch (error) {
      console.error(error)
      toast.error('Error')
    }
  }

  return (
    <Container>
      <Title>Enter vacation date</Title>
      <form onSubmit={handleSubmit}>
        <InputWrap>
          <label htmlFor="start">Start vacation</label>
          <input id="start" name="start" type="date" />
          <label htmlFor="end">End vacation</label>
          <input id="end" name="end" type="date" />
        </InputWrap>
        <button type="submit">Sent</button>
      </form>
    </Container>
  )
}
