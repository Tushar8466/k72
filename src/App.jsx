import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function App() {

  useGSAP(() => {

    const tl = gsap.timeline()

    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.3
      },
    })

    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: 0.3
      }
    })
  })



  return (
    <div className='text-white text-3xl'>
      <div className='h-screen w-full fixed z-10 flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/agence' element={<Agence />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
      </Routes>
    </div>
  )
}

export default App
