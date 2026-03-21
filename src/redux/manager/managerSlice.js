import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiAllUsers, apiLastClosedTable } from './operations'

const initialState = {
  isLoggedIn: false,
  users: [],
  tables: [],
  lastClosed: null,
  error: null,
  isLoading: false,
}

const managerSlice = createSlice({
    name: 'manager',
    initialState,

    extraReducers: (builder) => 
        builder 
    .addCase(apiAllUsers.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true       
        state.users = action.payload
      })
    .addCase(apiLastClosedTable.fulfilled, (state, action) => {
      state.isLoading = false
      state.isLoggedIn = true
      state.lastClosed = action.payload      
    })
      .addMatcher(
        isAnyOf(
            apiAllUsers.pending,
            apiLastClosedTable.pending
        ),
        (state) => {
          state.isLoading = true
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
            apiAllUsers.rejected,
            apiLastClosedTable.pending
        ),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const managerReducer = managerSlice.reducer