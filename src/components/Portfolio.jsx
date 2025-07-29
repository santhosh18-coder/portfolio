import React from 'react'
import projectImage1 from '../assets/image1.jpeg'
import projectImage2 from '../assets/image2.jpeg'
import projectImage3 from '../assets/image3.jpeg'


export default function Portfolio() {
  return (
    <div className='text-white w-full max-w-10/12 flex flex-col px-2 py-8 justify-center items-center' id='portfolio'>
      <p>My Portfolio</p>
      <h1 className='text-3xl px-2 py-4 font-bold'>My Latest Work</h1>
      <p className='py-10 '>Here are some of the projects I’ve worked on, each one built with a strong focus on design, performance, and user experience. From responsive UIs to interactive apps, these projects reflect my journey and growth as a front-end developer.
      </p>
      <div className='flex flex-col gap-3 sm:flex-row sm:gap-3 justify-between w-full py-8'>
        <div style={{ backgroundImage: `url(${projectImage1})` }} className='border-2 px-2 py-4 border-gray-400 bg-cover bg-center rounded-2xl w-full h-80 flex flex-col justify-end'>
          <div className='bg-white text-black opacity-80 px-2 py-4 flex'>
            <div>
              <h1 className='font-bold my-2'>Languages</h1>
              <p>HTML, CSS, Javascript, React</p>
            </div>
            <button className='px-4 py-4 rounded-bl-full rounded-tl-full bg-gray-400 font-bold text-2xl'>{">"}</button>
          </div>
        </div>
        <div style={{ backgroundImage: `url(${projectImage2})` }} className='border-2 px-2 py-4 border-gray-400 bg-cover bg-center rounded-2xl w-full h-80 flex flex-col justify-end'>
          <div className='bg-white text-black opacity-80 px-2 py-4 flex'>
            <div>
              <h1 className='font-bold my-2'>Languages</h1>
              <p>HTML, CSS, Javascript, React</p>
            </div>
            <button className='px-4 py-4 rounded-bl-full rounded-tl-full bg-gray-400 font-bold text-2xl'>{">"}</button>
          </div>
        </div><div style={{ backgroundImage: `url(${projectImage3})` }} className='border-2 px-2 py-4 border-gray-400 bg-cover bg-center rounded-2xl w-full h-80 flex flex-col justify-end'>
          <div className='bg-white text-black opacity-80 px-2 py-4 flex'>
            <div>
              <h1 className='font-bold my-2'>Languages</h1>
              <p>HTML, CSS, Javascript, React</p>
            </div>
            <button className='px-4 py-4 rounded-bl-full rounded-tl-full bg-gray-400 font-bold text-2xl'>{">"}</button>
          </div>
        </div>
      </div>
    </div>

  )
}
