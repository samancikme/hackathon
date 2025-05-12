import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import User_Data from './pages/User_Data'
import Loading from './components/Loading'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/user_data' element={<User_Data />} />
        <Route path='/test' element={<Loading/>} />
        <Route path='/result' element={<div>Результат</div>} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App