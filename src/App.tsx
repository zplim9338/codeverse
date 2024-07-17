import React from 'react'
import './App.css'
import '@arco-design/web-react/dist/css/arco.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MasterLayout from './components/layout/MasterLayout'
import GuestLayout from './components/layout/GuestLayout'

const App: React.FC = () => {
  return (
    <Router>
      <GuestLayout />
    </Router>
  )
}

export default App
