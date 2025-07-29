import React, { useState } from 'react'
import { FaLaptopCode } from "react-icons/fa"
import { MdDesignServices } from "react-icons/md"
import { MdPhoneIphone } from "react-icons/md"
import { SiReact } from "react-icons/si"
import { MdAnimation } from "react-icons/md"

export default function Services() {

  const [toggleBox, setToggleBox] = useState({
    box1: false,
    box2: false,
    box3: false,
    box4: false,
    box5: false
  })

  const handleToggle = (boxName) => {
    if (boxName) {
      setToggleBox((prev) => ({
        ...prev,
        [boxName]: !prev[boxName]
      }))
    }
  }

  console.log(toggleBox)
  return (
    <div id='services' className='text-white w-full max-w-10/12 flex flex-col px-2 py-8 justify-center items-center'>
      <p>What i offer</p>
      <h1 className='text-3xl px-2 py-4 font-bold'>My Services</h1>
      <p className='py-10 '>As a passionate front-end developer, I offer a range of services focused on building visually appealing, responsive, and user-friendly websites. From turning UI designs into interactive interfaces to deploying modern single-page applications, I aim to deliver clean, efficient, and scalable front-end solutions.
      </p>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-5  w-full'>
        <div className='border-2 px-4 py-8 border-gray-400 rounded-2xl w-full'>
          <FaLaptopCode size={32} color='skyblue' />
          <h1 className='font-bold my-4'>Front-End Web Development</h1>
          <p>I build responsive and interactive websites {toggleBox.box1 && "using React, Tailwind CSS, and JavaScript. I focus on clean code, smooth performance, and optimized layouts across all devices."}<button className=' text-white cursor-pointer' onClick={() => { handleToggle("box1") }}>{toggleBox.box1 ? '- read less' : '+ read more'}</button></p>
        </div>
        <div className='border-2 px-4 py-8 border-gray-400 rounded-2xl w-full'>
          <MdDesignServices size={32}  color='skyblue'/>
          <h1 className='font-bold my-4'>UI Implementation from Design</h1>
          <p>I convert Figma or design mockups into pixel-perfect front-end code{toggleBox.box2 && "using HTML, CSS, and modern styling frameworks like Tailwind CSS"}<button className=' text-white cursor-pointer' onClick={() => { handleToggle("box2") }}>{toggleBox.box2 ? '- read less' : '+ read more'}</button></p>
        </div>
        <div className='border-2 px-4 py-8 border-gray-400 rounded-2xl w-full'>
          <MdPhoneIphone size={32} color='skyblue'/>
          <h1 className='font-bold my-4'>Responsive & Mobile-First Design</h1>
          <p>I create layouts that adapt beautifully to different screen sizes{toggleBox.box3 && ", ensuring a smooth user experience on mobile, tablet, and desktop."}<button className=' text-white cursor-pointer' onClick={() => { handleToggle("box3") }}>{toggleBox.box3 ? '- read less' : '+ read more'}</button></p>
        </div>
        <div className='border-2 px-4 py-8 border-gray-400 rounded-2xl w-full'>
          <SiReact size={32} color='skyblue'/>
          <h1 className='font-bold my-4'> Single Page Applications SPA</h1>
          <p>I develop SPA projects using React and React Router{toggleBox.box4 && ", allowing seamless navigation and faster user experience without full page reloads."}<button className=' text-white cursor-pointer' onClick={() => { handleToggle("box4") }}>{toggleBox.box4 ? '- read less' : '+ read more'}</button></p>
        </div>
        <div className='border-2 px-4 py-8 border-gray-400 rounded-2xl w-full'>
          <MdAnimation size={32} color='skyblue'/>
          <h1 className='font-bold my-4'>Website Animations</h1>
          <p>I enhance user experience with modern animations using GSAP, {toggleBox.box5 && "making interfaces feel smooth and engaging."}<button className=' text-white cursor-pointer' onClick={() => { handleToggle("box5") }}>{toggleBox.box5 ? '- read less' : '+ read more'}</button></p>
        </div>
      </div>

    </div>
  )
}
