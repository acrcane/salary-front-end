import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Container, Label, Input,Submit } from './AuthForm.styled'
import { useDispatch } from 'react-redux'
import { apiSignIn } from '../../redux/auth/operations'

export const SignInForm = () => {
  const [formError, setFormError] = useState(null)
  const dispatch = useDispatch()

  const handleSubmit = async(e) => {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const email = (formData.get('email') || '').trim().toLowerCase()
    const password = (formData.get('password') || '').trim().replace(/[^a-zA-Z0-9]/g, '')
    if(!email || !password){
      setFormError('One of the fields is not filled in')
      return
    }
    setFormError(null)
    const data = {
      email,
      password
    }

    try {
      await dispatch(apiSignIn(data)).unwrap()
      toast.success(`Hello ${email}`)
    } catch (error) {
      console.error(error);
      toast.error('Wrong email or password')
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
      <Label htmlFor="password">
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Enter youre password"
        />
      </Label>
      {formError && <p style={{ color: 'red', marginTop: '10px' }}>{formError}</p>}
      <Submit type="submit">Submit</Submit>
    </form>
  </Container>
  )
}