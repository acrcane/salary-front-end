import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiSignIn, apiSignUp, apiSignOut, apiCurrent } from './operations'

const initialState = {
  token: null,
  isLoggedIn: false,
  user: null,
  error: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(apiSignUp.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        state.token = action.payload.token        
        state.user = action.payload.user
      })
      .addCase(apiSignIn.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        console.log(state.isLoggedIn);
        
        state.token = action.payload.token
        state.user = action.payload.user
      })
      .addCase(apiSignOut.fulfilled, () => {
        return initialState
      })
      .addCase(apiCurrent.fulfilled, (state, action) => {
        state.isLoading = false
        state.isLoggedIn = true
        state.user = {
          name: action.payload.name,
          email: action.payload.email,
          role: action.payload.role
        }        
      })
      .addMatcher(
        isAnyOf(
          apiSignUp.pending,
          apiSignIn.pending,
          apiCurrent.pending,
          apiSignOut.pending
        ),
        (state) => {
          state.isLoading = true
          state.error = null
        }
      )
      .addMatcher(
        isAnyOf(
          apiSignUp.rejected,
          apiSignIn.rejected,
          apiCurrent.rejected,
          apiSignOut.rejected
        ),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      ),
})

export const authReducer = authSlice.reducer
