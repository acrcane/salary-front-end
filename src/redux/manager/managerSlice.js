import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiAllUsers } from './operations'

const initialState = {
  isLoggedIn: false,
  users: [],
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
      .addMatcher(
        isAnyOf(
            apiAllUsers.pending,
        ),
        (state) => {
          state.isLoading = true
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
            apiAllUsers.rejected,

        ),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const managerReducer = managerSlice.reducer