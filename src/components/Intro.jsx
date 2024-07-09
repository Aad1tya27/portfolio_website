import React from 'react'

const Intro = () => {
    return (
        <>
            <div id='intro' className='bg-[#0f0f0f] w-full flex flex-col h-screen text-white justify-center items-center md:text-[40px]'>
                <div className='poppins-light text-center text-[24px] md:text-[40px]'>Hi, <span className='font-medium'>I'm Aaditya Agarwal</span></div>
                <div className='poppins-light text-center  text-[24px] md:text-[40px]'>I am a Full Stack Developer.</div>
                {/* <ul className='text-center text-[30px]'>
                    <li>Web Developer</li>
                    <li>Guitarist</li>
                    <li>Tennis Player</li>
                </ul> */}
            </div>
        </>
    )
}

export default Intro