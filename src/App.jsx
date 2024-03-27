import { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Login from './hotelsng/pages/login'
import Signup from './hotelsng/pages/signup'
import NotFound from './404'
import Index from './hotelsng/pages/index'
import Listing from './hotelsng/pages/product _listing'
import Single from './hotelsng/pages/single'
import Products from './hotelsng/pages/dashboard'
import Dashboard from './hotelsng/pages/vendor_dashboard'
import Profile from './hotelsng/pages/profile'
import Analytic from './hotelsng/pages/analytic'
import AllOrders from './hotelsng/pages/all_order'
import Carts from './hotelsng/pages/carts'
import AuthProvider from './utils/Context'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
            <Route element={<Index/>} path='/'/>
            <Route element={<Signup/>} path='/signup'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Carts/>} path='/carts'/>
            <Route element={<Profile/>} path='/profile'/>
            <Route element={<Products/>} path='/products'/>
            <Route element={<Analytic/>} path='/analytic'/>
            <Route element={<Listing/>} path='/shop-perfumes'/>
            <Route element={<Dashboard/>} path='/dashboard'/>
            <Route element={<Single/>} path='/product/:id'/>
            <Route element={<AllOrders/>} path='/orders'/>
            <Route element={<NotFound/>} path="*"/>
          </Routes>
      </AuthProvider>
    </>
  )
}

export default App
