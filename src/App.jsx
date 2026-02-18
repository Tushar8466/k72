import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='text-white text-3xl'>
      {/* <Link className='text-blue-500 mr-5 text-sm' to='/'>Home</Link>
      <Link className='text-blue-500 mr-5 text-sm' to='/agence'>Agence</Link>
      <Link className='text-blue-500 mr-5 text-sm' to='/projects'>Projects</Link> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/agence' element={<Agence />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>
  )
}

export default App
