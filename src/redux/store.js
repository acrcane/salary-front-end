import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  REGISTER,
  PERSIST,
  PURGE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './auth/authSlice.js'
import { tablesReducer } from './tables/tablesSlice.js'
import { workSessionReducer } from './workSession/workSessionSlice.js'
import { modalReducer } from './modal/modalSlice.js'

const authConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}
const tableConfig = {
  key: 'tables',
  storage,
  whitelist: ['tableId'],
}
export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    tables: persistReducer(tableConfig, tablesReducer),
    workSession: workSessionReducer,
    modal: modalReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, REGISTER, PERSIST, PURGE],
      },
    }),
})
export const persistor = persistStore(store)
