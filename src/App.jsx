import React from 'react'
import './App.css'
import AuthLayout from './layout/AuthLayout'
import Projects from './pages/Projects/Projects'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AuthLayout />}>
      <Route path='/Calendar' element={<Projects />}/>
      <Route path='/' element={<Projects />}/>
      <Route path='/Analytics' element={<Projects />}/>
      <Route path='/Activity' element={<Projects />}/>
      <Route path='/Projects' element={<Projects />}/>
      <Route path='/**' element={<Projects />}/>

      </Route>

    </Routes>
  )
}

export default App