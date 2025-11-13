import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import { persistor, store } from './redux/store.js'
import { ClipLoader } from 'react-spinners'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate loading={<ClipLoader />} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename='/salary-front-end'>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </StrictMode>
)
