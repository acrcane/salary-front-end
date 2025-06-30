import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../axiosInstance'

export const apiWorkSession = createAsyncThunk(
  '/workSession/apiWorkSession',
  async ({ tableId, checkIn, checkOut }, thunkApi) => {
    try {
      const { data } = await $api.post('/work-session/session', {
        tableId,
        checkIn,
        checkOut,
      })

      return data
    } catch (error) {
      thunkApi.rejectWithValue(error.message)
    }
  }
)
