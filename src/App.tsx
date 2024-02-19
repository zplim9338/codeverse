import React from 'react'
import './App.css'
import '@arco-design/web-react/dist/css/arco.css'
import Home from './pages/Home'
import Test from './pages/Test'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  const username = 'John Doe'
  return (
    // <div className="App">
    //   <header>
    //
    //   </header>
    //   <main>
    //     <div className="container">
    //       <Home username={username} />
    //       <Test username={username} />
    //     </div>
    //   </main>
    <Router>
      <Routes>
        <Route path='/' element={<Home username={username} />} />
        <Route path='/test' element={<Test username={username} />} />
      </Routes>
    </Router>
    // </div>
  )
}

export default App
