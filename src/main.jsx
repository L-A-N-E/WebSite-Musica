// importando dependencias
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from 'react-dom/client'
// Importando telas
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Music from './routes/Music.jsx'
import Error from './routes/Error.jsx'
// Importando estilo
import {GlobalStyle} from './styles/GlobalStyle.jsx'

const router = createBrowserRouter ([
  {path: '/', element: <App/>, errorElement: <Error/>,

    children:[
      {path: '/', element: <Home/>}, 
      {path: '/login', element: <Login/>}, 
      {path: '/music', element: <Music/>}, 
    ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
    <GlobalStyle/>
  </StrictMode>,
)
