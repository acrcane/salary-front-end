import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../axiosInstance'

export const apiCheckIn = createAsyncThunk(
  '/check-in/apiCheckIn',
  async ({ tableId, checkIn }, thunkApi) => {
    try {
      const { data } = await $api.post('/work-session/check-in', {
        tableId,
        checkIn,
      })
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const apiCheckOut = createAsyncThunk(
  '/check-out/apiCheckOut',
  async ({ checkOut, sessionId }, thunkApi) => {
    try {
      const { data } = await $api.patch(`/work-session/check-out/${sessionId}`, {
        checkOut,
      })
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
