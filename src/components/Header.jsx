import React from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP)

export default function Header() {
  useGSAP(()=>{
    
  },[])
  return (
    <div className='flex justify-between items-center px-6 py-5 text-white w-full'>
      <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-200 to-green-500 bg-clip-text text-transparent'>Santhosh</h1>
      <div className='hidden sm:flex gap-5 font-bold transition-all'>
        <a className='focus:underline hover:underline transition-transform duration-200 hover:scale-110 underline-offset-4 decoration-2' href='#home'>Home</a>
        <a href='#about' className='focus:underline hover:underline transition-transform duration-200 hover:scale-110 underline-offset-4 decoration-2'>About Me</a>
        <a href='#services' className='focus:underline hover:underline transition-transform duration-200 hover:scale-110 underline-offset-4 decoration-2'>Services</a>
        <a href='#portfolio' className='focus:underline hover:underline transition-transform duration-200 hover:scale-110 underline-offset-4 decoration-2'>Portfolio</a>
        <a href='#contact' className='focus:underline hover:underline transition-transform duration-200 hover:scale-110 underline-offset-4 decoration-2'>Contact</a>
      </div>
      <a href='#contact'><button className='text-2xl hidden sm:block bg-white text-black rounded-full px-3 py-2 text-center font-bold cursor-pointer transition-transform duration-300 hover:scale-110'>Connect</button></a>
      <button className='sm:hidden text-2xl'>☰</button>
    </div>
  )
}
