import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Company from './components/Company'
import Projects from './components/Projects'
import ErrorPage from '../../p2/src/components/ErrorPage'
import Project from './components/Project'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/company',
        element: <Company/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/project/:id',
        element: <Project/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
