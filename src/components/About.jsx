import React from 'react'
import { IoLanguageSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { PiSuitcaseSimpleDuotone } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <div id='about' className='text-white w-full max-w-10/12 flex flex-col px-2 py-8 justify-center items-center'>
      <p>Introduction</p>
      <h1 className='text-3xl px-2 py-4 font-bold'>About Me</h1>
      <p className='py-10 '>I'm Santhoshkannan M., a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.
        I enjoy building clean, responsive, and user-focused websites that perform well across all devices.
      </p>
      <div className='flex flex-col gap-3 sm:flex-row sm:gap-3 justify-between w-full py-8'>
        <div className='border-2 px-2 py-4 border-gray-400 rounded-2xl w-full'>
          <IoLanguageSharp size={32} className='my-2' />
          <h1 className='font-bold my-2'>Languages</h1>
          <p>HTML, CSS, Javascript, React</p>
        </div>
        <div className='border-2 px-2 py-4 border-gray-400 rounded-2xl w-full'>
          <FaGraduationCap size={32} className='my-2' />
          <h1 className='font-bold my-2'>Education</h1>
          <p>B.Tech Artificial Intelligence And Data Science</p>
        </div>
        <div className='border-2 px-2 py-4 border-gray-400 rounded-2xl w-full'>
          <PiSuitcaseSimpleDuotone size={32} className='my-2' />
          <h1 className='font-bold my-2'>Projects</h1>
          <p>Build an Turf Booking App using React</p>
        </div>
      </div>
      <div className='text-white w-full py-6'>
        <p className='px-2 py-4'>Tools i use</p>
        <div className='flex gap-3'>
          <div className='border-2 rounded-2xl p-2 border-gray-400'><FaReact color='skyblue' size={32} /></div>
          <div className='border-2 rounded-2xl p-2 border-gray-400'><FaGithub color='skyblue' size={32} /></div>
        </div>
      </div>
    </div>
  )
}
