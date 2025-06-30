import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../axiosInstance'

const setToken = token => {  
  $api.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearToken = () => {
  delete $api.defaults.headers.common.Authorization
}

export const apiSignUp = createAsyncThunk(
  'auth/apiSignUp',
  async (formData, thunkApi) => {
    try {
      const { data } = await $api.post('/users/signup', formData)
      setToken(data.token)   
      return data
    } catch (error) {      
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const apiSignIn = createAsyncThunk(
  'auth/apiSignIn',
  async (formData, thunkApi) => {
    try {
      const { data } = await $api.post('/users/signin', formData)
      setToken(data.token)
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const apiCurrent = createAsyncThunk(
  'auth/apiCurrent',
  async (_, thunkApi) => {
    const state = thunkApi.getState()
    const token = state.auth.token
    try {
      setToken(token)
        const { data } = await $api.get('/users/current')        
        return data
    } catch (error) {
       return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const apiSignOut = createAsyncThunk(
  'auth/apiSignOut',
  async (_, thunkApi) => {
    try {
      await $api.post('/users/signout')
      clearToken()
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
