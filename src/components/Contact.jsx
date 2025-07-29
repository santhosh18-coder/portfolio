import React from 'react'
import { MdPhone } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdLocationOn } from 'react-icons/md';

export default function Contact() {
  const [result, setResult] = React.useState("");

  console.log(result)

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b859051-f30d-4a5d-b2c7-fd0ab1b27fc6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id='contact' className='text-white px-7 py-3'>
      <h1 className='text-4xl font-bold text-center px-2 py-5'>Get in touch</h1>
      <div className='sm:flex w-full py-10 justify-between gap-10'>
        <div className='w-full flex flex-col gap-5'>
          <h2 className='text-3xl font-bold pb-5'>Let's talk</h2>
          <p>I'm currently available to take on new project, to feel free to send me a message about anything that you want me to work on, you can contact anytime.</p>
          <div className='flex gap-2.5 items-center'>
            <MdEmail/>
            <p>santhoshkannanm21@gmail.com</p>
          </div>
          <div className='flex gap-2.5 items-center'>
            <MdPhone/>
            <p>+91 8438520134</p>
          </div>
          <div className='flex gap-2.5 items-center'>
            <MdLocationOn/>
            <p>Tamil Nadu,India</p>
          </div>
        </div>
        <div className='w-full'>
          <form onSubmit={onSubmit} className='flex flex-col gap-5'>
            <label htmlFor='name'>Your name</label>
            <input className='border-2 border-gray-400 px-2 py-4' type='text' id='name' name='name' placeholder='Enter your name' required />
            <label htmlFor='email'>Your Email</label>
            <input className='border-2 border-gray-400 px-2 py-4 text-white' type='text' id='email' name='email' placeholder='Enter your eamil' required />
            <label htmlFor='contact-message'>Enter your message here</label>
            <textarea className='border-2 border-gray-400 px-2 py-4 ' rows={3} name='contact-message' placeholder='Enter your message' />
            <button type='submit' className='cursor-pointer bg-gray-400 py-5 rounded-2xl max-w-3xs text-black opacity-50'>Submit Now</button>
          </form>
        </div>
      </div>
    </div>
  )
}
