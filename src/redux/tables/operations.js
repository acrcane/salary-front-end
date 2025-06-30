import { createAsyncThunk } from '@reduxjs/toolkit'
import { $api } from '../axiosInstance'

export const apiCurrentTable = createAsyncThunk(
  'table/apiCurrentTable',
  async (id, thunkApi) => {
    try {
      const { data } = await $api.get(`/table/${id}`)


      return data
    } catch (error) {
      thunkApi.rejectWithValue(error.message)
    }
  }
)

export const apiCreateTable = createAsyncThunk(
  'table/apiCreateTable',
  async (_, thunkApi) => {
    try {
      const { data } = await $api.post('/table/create')
      return data
    } catch (error) {
      thunkApi.rejectWithValue(error.message)
    }
  }
)

export const apiCloseTable = createAsyncThunk(
  'table/apiCloseTable',
  async (id, thunkApi) => {
    try {
      const { data } = await $api.patch(`/table/close/${id}`)
      return data
    } catch (error) {
      thunkApi.rejectWithValue(error.message)
    }
  }
)
