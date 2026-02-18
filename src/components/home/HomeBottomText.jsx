import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottomText() {
  return (
    <div className='font-[font2] flex items-center justify-center gap-4 pb-10'>
      <div className='text-[6.5vw] border-[5px] border-white rounded-full px-5 py-3 pt-6 uppercase leading-[6vw] transition-all duration-300 hover:text-[#bbf628] hover:border-[#bbf628] cursor-pointer'>
        <Link className='text-[6vw] mt-6' to='/projects'>Projets</Link>
      </div>
      <div className='text-[6.5vw] border-[5px] border-white rounded-full px-5 py-3 pt-6 uppercase leading-[6vw] transition-all duration-300 hover:text-[#bbf628] hover:border-[#bbf628] cursor-pointer'>
        <Link className='text-[6vw] mt-6' to='/agence'>Agence</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
