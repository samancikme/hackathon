import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import UserData from './pages/Form'
import Main_load from './pages/Main_Load'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main_load />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/user_data' element={<UserData />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App