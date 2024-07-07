import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen bg-[#141414] text-white flex flex-col items-center p-10'>
      <h1 className='text-[40px] font-medium text-center p-10'>About Me</h1>
      <div className="container flex flex-col md:flex-row items-center  justify-around gap-10">
        <div className="part1 flex justify-center items-center lg:w-[50%] ">
          <p className='text-justify  text-md lg:text-lg'>
          Hello, I'm Aaditya Agarwal, a second-year Computer Science and Engineering student at IIT BHU. I'm a full stack developer who began my development journey in December 2023, driven by a passion for exploring the field. I enjoy creating new projects and delving into the Web. Alongside web development, I am also into competitive programming, as I love solving problems. In my free time, I play tennis and the guitar. I enjoy experimenting with various software and learning new skills; during school, I developed Tinkercad projects and used Photoshop for fun.
            </p>
        </div>
        <div className="part2 w-[50%] flex justify-center items-center ">
          <div className="extra border-2 border-white rounded-[50px]">
            <div className="mypic w-[350px] border-4 border-purple-800 overflow-hidden rounded-[50px]">
              <img src="/mypic2.jpeg" alt="Picture Not Available" className=' scale-150' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About