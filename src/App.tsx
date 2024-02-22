import React from 'react'
import './App.css'
import '@arco-design/web-react/dist/css/arco.css'
import { BrowserRouter as Router } from 'react-router-dom'
import MasterLayout from './components/layout/MasterLayout'

const App: React.FC = () => {
  return (
    <Router>
      <MasterLayout />
    </Router>
  )
}

export default App
