import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../axiosInstance'

export const apiVacationRequest = createAsyncThunk(
  'message/apiVacationRequest',
  async (formData, thunkApi) => {
    try {
      const { data } = $api.post('/vacation/create-request', formData)
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
