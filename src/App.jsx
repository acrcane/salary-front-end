import './App.css'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrivateRoute from './routes/PrivateRoute'
import RestrictedRoute from './routes/RestrictedRoute'
import { apiCurrent } from './redux/auth/operations'
import { selectAuthUserData } from './redux/auth/selectors'
import { selectAuthToken } from './redux/auth/selectors'
import { apiCurrentTable } from './redux/tables/operations'
import { ClipLoader } from 'react-spinners'
import { override } from './utils/loader'
import { ToastContainer } from 'react-toastify'
import { Navigate } from 'react-router-dom'



const Layout = lazy(() => import('./components/layout/Layout'))
const PrivateLayout = lazy(() =>
  import('./components/PrivateLayout/PrivateLayout')
)
const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'))
const SignUpPage = lazy(() => import('./pages/AuthPages/SignUpPage'))
const SignInPage = lazy(() => import('./pages/AuthPages/SignInPage'))
const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const TablePage = lazy(() => import('./pages/TablePages/TablePages'))
const ProfilePage = lazy(() => import('./pages/ProfilePage/ProfilePage'))

function App() {
  
  const dispatch = useDispatch()
  const token = useSelector(selectAuthToken)
  const user = useSelector(selectAuthUserData)


  useEffect(() => {
    const persist = localStorage.getItem('persist:auth');
    if (!persist) return;
  
    const parsed = JSON.parse(persist);
    const token = parsed.token?.replace(/"/g, '');
  
    if (token) {
      dispatch(apiCurrent());
    }
  }, [dispatch, token]); 

  useEffect(() => {
    if (user) {
      dispatch(apiCurrentTable())
    }
  }, [user, dispatch])

  useEffect(() => {
    const ping = setInterval(() => {
      fetch('https://salary-back-end.onrender.com/ping')
    }, 10 * 60 * 1000)

    return () => clearInterval(ping)
  }, [])   

  return (
    <>
      <Suspense
        fallback={
          <ClipLoader
            color={`#fff`}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WelcomePage />} />
            <Route
              path="/sign-up"
              element={
                <RestrictedRoute redirectTo="/home" element={<SignUpPage />} />
              }
            ></Route>
            <Route
              path="/sign-in"
              element={
                <RestrictedRoute redirectTo="/home" element={<SignInPage />} />
              }
            />
            <Route
              element={
                <PrivateRoute
                  redirectTo="/sign-in"
                  element={<PrivateLayout />}
                />
              }
            >
              <Route path="/home" element={<HomePage />} />
              <Route path="/table/active-table" element={<TablePage />} />
              <Route path='/user-profile' element={<ProfilePage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  )
}

export default App
