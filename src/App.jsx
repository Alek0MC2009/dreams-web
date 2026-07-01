import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<h1>En desarrollo</h1>} />
      <Route path="/shop" element={<h1>Shop</h1>} />
    </Routes>
  )
}

export default App
