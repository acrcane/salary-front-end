import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiWorkSession } from './operations'

const initialState = {
  workSession: {
    checkIn: null,
    checkOut: null,
    tableId: null
  },
  error: null,
  isLoading: false,
}

const workSessionSlice = createSlice({
  name: 'workSession',
  initialState,

  reducers: {
    setCheckIn(state, action) {
      state.workSession.checkIn = action.payload
    },
    setCheckOut(state, action) {
      state.workSession.checkOut = action.payload
    },
    setTableId(state, action) {
      state.workSession.tableId = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiWorkSession.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.checkIn = action.payload
        state.checkOut = action.payload
      })
      .addMatcher(isAnyOf(apiWorkSession.pending), (state) => {
        state.isLoading = true
        state.error = null
      })

      .addMatcher(isAnyOf(apiWorkSession.rejected), (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { setCheckIn, setCheckOut, setTableId } = workSessionSlice.actions

export const workSessionReducer = workSessionSlice.reducer
