import React from 'react'
import LandingPage from './components/common/landing-page'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
    </Routes>
  )
}

export default App
