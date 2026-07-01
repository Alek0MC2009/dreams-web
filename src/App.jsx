import React from 'react'
import LandingPage from './components/pages/landing-page'
import { Routes, Route, Navigate } from 'react-router-dom'
// import { DemoPage } from './components/pages/demo-page'
// import TeamPage from './components/pages/team-page'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<LandingPage />} />
    </Routes>
  )
}

export default App
