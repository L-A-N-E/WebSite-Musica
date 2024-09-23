import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter ([
  {path: '/', element: <App/>,errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>}, // Home
      {path: '/sign-up', element: <SignUp/>}, //Sign Up
      {path: '/app-mobile', element: <AppMobile/>}, // App Mobile
    ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
