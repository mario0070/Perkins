import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Login from './hotelsng/pages/login'
import Signup from './hotelsng/pages/signup'
import NotFound from './404'
import Index from './hotelsng/pages/index'
import AuthProvider from './utils/Context'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
            <Route element={<Index/>} path='/'/>
            <Route element={<Signup/>} path='/signup'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<NotFound/>} path="*"/>
          </Routes>
      </AuthProvider>
    </>
  )
}

export default App
