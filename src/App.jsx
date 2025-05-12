import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import UserData from './pages/Form'
import Main_load from './pages/Main_Load'
import Consultation from './pages/Consultation'
import History from './pages/History'
import Not_found from './pages/Not_found'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Main_load />} />
        <Route path='/home' element={<Home />} />
        <Route path='/user_data' element={<UserData />} />
        <Route path='/consultation' element={<Consultation />} />
        <Route path='/history' element={<History />} />
        <Route path='*' element={<Not_found />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App