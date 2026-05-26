import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiVacationRequest } from './operations'

const initialState = {
  isLoggedIn: false,
  vacation: null,
  error: null,
  isLoading: false,
}

const messageSlice = createSlice({
    name: 'message',
    initialState,

    extraReducers: (builder) => 
        builder 
    .addCase(apiVacationRequest.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true       
        state.vacation = action.payload
      })
      .addMatcher(
        isAnyOf(
            apiVacationRequest.pending,
        ),
        (state) => {
          state.isLoading = true
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
            apiVacationRequest.rejected,
        ),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const managerReducer = messageSlice.reducer