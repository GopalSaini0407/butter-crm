import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
window.global = window;

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss' 

// We use those styles to show code examples, you should remove them in your application.
import './scss/examples.scss'

import PrivateComponent from './myComponents/PrivateComponet';
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const ForgetPassword=React.lazy(()=> import('./myComponents/ForgetPassword'));
const PasswordVerification=React.lazy(()=> import('./myComponents/PasswordVerificaiton'));
const UpdatePassword=React.lazy(()=> import('./myComponents/UpdatePassword'));

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/forget-password" name="Forget Password" element={<ForgetPassword/>}/>
          <Route exact path="/password-verification" name="Verification Password" element={<PasswordVerification/>}/>
           <Route exact path="/update-password" name="Update Password" element={<UpdatePassword/>}/>
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route element={<PrivateComponent/>}>
          <Route path="*" name="Home" element={<DefaultLayout />} />
          </Route>
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
