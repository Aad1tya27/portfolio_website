import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-black sticky top-0 z-10 border-b-[0.1px] border-opacity-25 border-white  text-white w-full flex justify-between p-3 px-5 items-center'>
        <ul className='flex gap-10 items-center'>
            <li className='domine text-3xl'>A</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
        <ul className='flex items-center gap-5'>
            <li>Contact Me</li>
            <a href='/aaditya-agarwal-cv.pdf' download={false} className='bg-white font-medium rounded-md text-black p-2 px-4'>View Resume</a>
        </ul>
    </div>
  )
}

export default Navbar