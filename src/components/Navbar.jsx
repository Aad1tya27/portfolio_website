import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Navbar = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      // console.log(windowDimensions);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <div className='bg-black h-[10vh] sticky top-0 bg-opacity-75 relative z-10 border-b-[0.1px] border-opacity-25 border-white  text-white w-full flex justify-between p-3 px-5 items-center'>
        <ul className='flex gap-10 items-center'>
          {
            windowDimensions.width > 700
              ?
              <>
                <HashLink smooth to={"/#intro"} className='domine text-3xl'>A</HashLink>
                <HashLink smooth to={"/#about"}>About Me</HashLink>
                <HashLink smooth to={"/#skills"}>Skills</HashLink>
                <HashLink smooth to={"/#projects"}>Projects</HashLink></>
              :
              windowDimensions.width > 400
                ?
                <>
                  <HashLink smooth to={"/#intro"} className='domine text-3xl'>A</HashLink>
                  {/* <HashLink smooth to={"/#about"}>About Me</HashLink>
                <HashLink smooth to={"/#skills"}>Skills</HashLink> */}
                  <HashLink smooth to={"/#projects"}>Projects</HashLink></>
                :
                <>
                  <HashLink smooth to={"/#intro"} className='domine text-3xl'>A</HashLink>
                  {/* <HashLink smooth to={"/#about"}>About Me</HashLink> */}
                  {/* <HashLink smooth to={"/#skills"}>Skills</HashLink> */}
                  {/* <HashLink smooth to={"/#projects"}>Projects</HashLink> */}</>
          }
        </ul>
        <ul className='flex items-center gap-5'>
          {
            windowDimensions.width > 400
              ?
              <>
                <HashLink smooth to={"/#contact"}>Contact Me</HashLink>
                <a href='/aaditya-agarwal-cv.pdf' download={false} className='bg-white font-medium rounded-md text-black p-2 px-4'>View Resume</a></>
              :
              <>
                {/* <HashLink smooth to={"/#contact"}>Contact Me</HashLink> */}
                <a href='/aaditya-agarwal-cv.pdf' download={false} className='bg-white font-medium rounded-md text-black p-2 px-4'>View Resume</a></>
          }
          {/* <HashLink smooth to={"/#contact"}>Contact Me</HashLink>
        <a href='/aaditya-agarwal-cv.pdf' download={false} className='bg-white font-medium rounded-md text-black p-2 px-4'>View Resume</a> */}
        </ul>
      </div>
      <div className='bg-black h-[10vh] absolute top-0 w-full z-0'></div>
    </>
  )
}

export default Navbar