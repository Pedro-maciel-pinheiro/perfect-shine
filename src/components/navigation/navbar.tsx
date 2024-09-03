import React from 'react'
import { LanguageSelector } from '../language/language-selector'

export default function Navbar() {
  return (
    <nav className='fixed w-full h-12 bg-black text-white z-30'>
        
       <div className='flex items-center justify-center 
       max-w-7xl mx-auto h-10 bg-red-600 mt-1 relative'>
       
        <ul className='flex gap-2'>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
        </ul>



        <div className='absolute right-0 mx-2'>
        <LanguageSelector/>
        </div>
       </div>

       
    </nav>
  )
}
