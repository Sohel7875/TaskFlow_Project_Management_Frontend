import React from 'react'
import './App.css'
import AuthLayout from './layout/AuthLayout'
import Projects from './pages/Projects/Projects'

const App = () => {
  return (
    <main><AuthLayout children={<Projects />} /></main>
  )
}

export default App