import { Typewriter } from 'react-simple-typewriter';
const Intro = () => {
    return (
        <>
            <div id='intro' className='bg-[#0f0f0f] relative w-full flex flex-col h-screen text-white justify-center items-center md:text-[40px]'>
                <div className='poppins-light text-center text-[25px] sm:text-[40px]'>Hi, <span className='font-medium'>I&lsquo;m Aaditya Agarwal</span></div>
                <div className='poppins-light text-center text-[25px] sm:text-[40px] text-[#c973ff]'>
                    <span className='text-white'>I am a{' '} </span>
                    <Typewriter
                        words={['Software Engineer.', 'Guitarist.', 'Tennis Player.']}
                        loop={true}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </div>
            </div>
        </>
    )
}

export default Intro