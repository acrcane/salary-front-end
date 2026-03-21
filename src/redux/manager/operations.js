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

export const apiLastClosedTable = createAsyncThunk(
  'lastClosedTable/apiClosedTable',
  async (id, thunkApi) => {
    try {
      const { data } = await $api.get(`/manager/user-last-table/${id}`)
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
  }
)
