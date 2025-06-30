import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiCloseTable, apiCreateTable, apiCurrentTable } from './operations'


const initialState = {
  currentTable: null,
  tableId: null,
  allTables: [],
  error: null,
  isLoading: false,
}

const tablesSlice = createSlice({
  name: 'tables',
  initialState,

  extraReducers: builder => {
    builder
    .addCase(apiCurrentTable.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.currentTable = action.payload
      state.tableId = action.payload._id
    })
    .addCase(apiCreateTable.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.currentTable = action.payload
      state.tableId = action.payload._id
    })
    .addCase(apiCloseTable.fulfilled, (state, action) => {
      state.isLoading = false
      state.error = null
      state.currentTable = action.payload
      state.tableId = action.payload._id
    })
    .addMatcher(
      isAnyOf(
        apiCurrentTable.pending,
        apiCreateTable.pending,
        apiCloseTable.pending,
      ),
      (state) => {
        state.isLoading = true
        state.error = null
      }
    )
    .addMatcher(
      isAnyOf(
        apiCurrentTable.rejected,
        apiCreateTable.rejected,
        apiCloseTable.rejected,
      ),
      (state, action) => {
        state.isLoading = false
        state.error = action.payload
      }
    )
  }  
})

export const tablesReducer = tablesSlice.reducer