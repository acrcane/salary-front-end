import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Label, Input, Submit } from './AuthForm.styled'
import { apiSignUp } from '../../redux/auth/operations'
import { toast } from 'react-toastify'

export const SignUpForm = () => {
  const [formError, setFormError] = useState(null)
  const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(e.currentTarget)
    const email = (formData.get('email') || '').trim().toLowerCase()
    const name = (formData.get('name') || '').trim().toLowerCase()
    const password = (formData.get('password') || '')
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '')
    const confirmPassword = (formData.get('confirmPassword') || '')
      .trim()
      .replace(/[^a-zA-Z0-9]/g, '')

    if (password !== confirmPassword) {
      setFormError('Password is not confirm')
      toast.error('Password is not confirm')
      return
    }
    if (!email || !password || !confirmPassword) {
      setFormError('The form is not filled out.')
      toast.error('The form is not filled out.')
      return
    }
    setFormError(null)
    const data = {
      email,
      name,
      password,
    }
    try {
      await dispatch(apiSignUp(data)).unwrap()
      toast.success(`Hello ${name}`)
    } catch (error) {
      console.error(error);
      toast.error('This email already exists')
    } finally {
      form.reset()
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter youre email"
          />
        </Label>
        <Label htmlFor="name">
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Enter youre name"
          />
        </Label>
        <Label htmlFor="passworg">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="Enter youre password"
          />
        </Label>
        <Label htmlFor="confirmPassword">
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Repeat your password"
          />
        </Label>
        {formError && (
          <p style={{ color: 'red', marginTop: '10px' }}>{formError}</p>
        )}
        <Submit type="submit">Submit</Submit>
      </form>
    </Container>
  )
}
