import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Compont/MainLayout/MainLayout'
import Home from './Compont/Home/Home'
import About from './Compont/Navbar/About/About'
import Contact from './Compont/Contact/Contact'
import Protfolio from './Compont/Portfolio/Protfolio'
import NotFond from './Compont/NotFond/NotFond'

export default function App() {
  let MyRouter = createBrowserRouter([{
    index: "/", element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'portfolio', element: <Protfolio /> },
      { path: '*', element: <NotFond /> }
    ]
  }])
  return (
    <>

      <RouterProvider router={MyRouter} />


    </>
  )
}
