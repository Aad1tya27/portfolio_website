import React from 'react'

const SkillCard = ({ name, children }) => {
    return (<>
        {
            name!="" ?
                <>
                    <div className=" text-center w-[200px] lg:w-auto  bg-gray-800  bg-opacity-30 text-xl  p-3 px-6 text-white">
                        < div className='flex justify-center items-center' >
                            <h2 className='text-kg font-medium p-2'>{name}</h2>
                            {children}
                        </div >
                        
                    </div >
                    
                </>
                :
                <>
                <div className=" w-[200px] lg:w-auto  bg-gray-800  bg-opacity-30 flex justify-center items-center p-3 px-6   ">
                    {children}
                </div >
                </>
        }
        
    </>
    )
}

export default SkillCard