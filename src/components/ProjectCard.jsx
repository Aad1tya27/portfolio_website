import React from 'react'

const ProjectCard = ({children}) => {
  return (
    <div className=' flex justify-center items-center h-[500px]  bg-gradient-to-b from-gray-800/100 to-gray-700/100  shadow-[0_0px_2px_2px_rgba(256,256,256,0.5)]  rounded-lg '>
        {children}
    </div>
  )
}

export default ProjectCard