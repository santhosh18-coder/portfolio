import React from 'react'
import Profile_Pic from '../assets/Profille_pic.jpg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)

export default function Home() {
  useGSAP(()=>{
    const t1=gsap.timeline()
    t1.from('#home-intro',{
      opacity:0,
      duration:2,
      y:10
    })
    .from('#home-desc',{
      opacity:0,
    },1)
    .from('.home-buttons',{
      y:100,
      duration:1,
      stagger:0.2,
      opacity:0
    },1)
  })
  return (
    <div id='home' className='flex justify-center items-center flex-col text-white'>
      <img className='rounded-full w-52 h-52' src={Profile_Pic} alt='user_img' />
      <div className='w-full max-w-3xl px-3 flex font-bold  justify-center items-center flex-col gap-2 py-2 sm:py-4 text-center'>
        <h2 id='home-intro' className='text-2xl sm:text-3xl py-4 bg-gradient-to-r from-blue-200 to-green-500 bg-clip-text text-transparent'>I'm Santhosh, A Front-End Developer passionate about crafting modern, responsive, and user-friendly web experiences.</h2>
        <p id='home-desc' className='py-2'>I enjoy building clean, responsive, and user-focused websites that perform well across all devices.</p>
      </div>
      <div className='flex justify-between w-80 px-4 py-2 sm:py-4'>
        <a href='#contact'><button className='home-buttons text-white border-2 border-white bold px-2 py-4 rounded-full cursor-pointer'>Connect with Me</button></a>
        <a href='https://drive.google.com/file/d/1evN5wFZiwUklM87iVld9sWxpf8V9EPca/view?usp=sharing ' target='_blank' rel='noopener noreferrer'><button className='home-buttons text-white border-2 border-white bold px-5 py-4 rounded-full cursor-pointer'>My resume</button></a>
      </div>
    </div>
  )
}
 