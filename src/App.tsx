import React from 'react'
import './App.css'
import '@arco-design/web-react/dist/css/arco.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MasterLayout from './components/layout/MasterLayout'
import GuestLayout from './components/layout/GuestLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Test from './pages/Test'

const App: React.FC = () => {
  const username = 'John Doe'

  return (
    <Router>
      <Routes>
        {/* GuestLayout */}
        <Route element={<GuestLayout />}>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Route>

        {/* MasterLayout */}
        <Route element={<MasterLayout />}>
          <Route path='/home' element={<Home username={username} />} />
          <Route path='/test' element={<Test username={username} />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
