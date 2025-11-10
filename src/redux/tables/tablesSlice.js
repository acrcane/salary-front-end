import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { apiCloseTable, apiCreateTable, apiCurrentTable, apiCurrentTableId } from './operations'

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
  reducers: {
    clearTableId: (state) => {
      state.tableId = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(apiCurrentTable.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.currentTable = action.payload    
        state.tableId = action.payload?._id || null
      })
      .addCase(apiCreateTable.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.currentTable = action.payload
        state.tableId = action.payload?._id || null
      })
      .addCase(apiCloseTable.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.currentTable = action.payload
        state.tableId = action.payload?._id || null
      })
      .addCase(apiCurrentTableId.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        state.currentTable = action.payload    
        state.tableId = action.payload?._id || null
      })
      .addMatcher(
        isAnyOf(
          apiCurrentTable.pending,
          apiCreateTable.pending,
          apiCloseTable.pending,
          apiCurrentTableId.pending
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
          apiCurrentTableId.rejected
        ),
        (state, action) => {
          state.isLoading = false
          state.error = action.payload
        }
      )
  },
})
export const { clearTableId } = tablesSlice.actions
export const tablesReducer = tablesSlice.reducer
