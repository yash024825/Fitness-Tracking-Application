import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Tracker from './pages/Tracker'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

export default function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  )
}