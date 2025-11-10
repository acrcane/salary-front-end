import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../axiosInstance'

export const apiAllUsers = createAsyncThunk(
  'get/apiAllUsers',
  async (_, thunkApi) => {
    try {
      const { data } = await $api.get('/manager/allusers')
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
