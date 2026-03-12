import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiCheckIn, apiCheckOut } from './operations'

const initialState = {
  sessionId: null,
  checkIn: null, 
  checkOut: null,
  tableId: null,
  error: null,
  isLoading: false,
}

const workSessionSlice = createSlice({
  name: 'workSession',
  initialState,

  reducers: {
    setCheckIn(state, action) {
      state.checkIn = action.payload
    },
    setCheckOut(state, action) {
      state.checkOut = action.payload
    },
    setTableId(state, action) {
      state.tableId = action.payload
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(apiCheckIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.sessionId = action.payload._id   
        state.checkIn = action.payload
        state.tableId = action.payload
      })
      .addCase(apiCheckOut.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.sessionId = action.payload._id
        state.checkOut = action.payload       
      })
      .addMatcher(isAnyOf(apiCheckIn.pending, apiCheckOut.pending), (state) => {
        state.isLoading = true
        state.error = null
      })

      .addMatcher(isAnyOf(apiCheckIn.rejected, apiCheckOut.rejected), (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { setCheckIn, setCheckOut, setTableId } = workSessionSlice.actions

export const workSessionReducer = workSessionSlice.reducer
