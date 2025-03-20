import SkillCard from './skillCard'


const Stack = () => {
  return (
    <div id='skills' className='w-full min-h-[90vh] bg-[#010407] text-white p-10 relative'>

      <h1 className='text-[40px] font-medium text-center p-10  '> Languages & Frameworks</h1>
      <div className='flex flex-col items-center'>
        <h1 className='text-[35px] text-gray-300 text-center font-normal p-1 pt-5 underline underline-offset-8 decoration-1 '>Frontend</h1>
        <div className="frontend w-[80%] flex flex-wrap gap-10  items-center m-5 justify-center">

          <SkillCard name={"HTML"}>
            <img src="/html.svg" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"CSS"}>
            <img src="/css.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"JavaScript"}>
            <img src="/js.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"TypeScript"}>
            <img src="/ts.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"React"}>
            <img src="/react-1.svg" alt="" className='w-[40px] mx-2' />
          </SkillCard>
          <SkillCard name={"Tailwind"}>
            <img src="/tailwind.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={""} >
            <img src="/next.png" alt="" className='w-[100px]  ' />
          </SkillCard>
        </div>

        <h1 className='text-[35px] text-gray-300 text-center font-normal p-1 pt-5  underline underline-offset-8 decoration-1 '>Backend & Database</h1>

        <div className="backendAndDatabase w-[80%] flex flex-wrap gap-10  items-center m-5 justify-center">
          {/* <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Backend</h1> */}
          <SkillCard name={"Node.js"}>
            <img src="/node.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Golang"}>
            <img src="/go.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={""} >
            <img src="/next.png" alt="" className='w-[100px]' />
          </SkillCard>
          {/* <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Database</h1> */}
          <SkillCard name={"MongoDB"}>
            <img src="/mongo.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"PostgreSQL"}>
            <img src="/postgres.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Prisma"}>
            <img src="/prisma.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>


        <h1 className='text-[35px] text-gray-300 text-center font-normal p-1 pt-5 underline underline-offset-8 decoration-1'>Development Utils & Cloud</h1>

        <div className="utils w-[80%] flex flex-wrap gap-10  items-center m-5 justify-center">
          {/* <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Utils</h1> */}
          <SkillCard name={"Docker"}>
            <img src="/docker.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
         
          <SkillCard name={"Git"}>
            <img src="/git.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Postman"}>
            <img src="/postman.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"AWS"}>
            <img src="/aws.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>

        <h1 className='text-[35px] text-gray-300 text-center font-normal p-1 pt-5  underline underline-offset-8 decoration-1'>Others</h1>

        <div className="miscellaneous w-[80%] flex flex-wrap gap-10  items-center m-5 justify-center">
          {/* <h1 className='text-3xl text-center font-normal p-1 pt-5 '>Miscellaneous</h1> */}
          {/* <SkillCard name={"C"}>
            <img src="/c.svg" alt="" className='w-[25px] mx-2' />
          </SkillCard> */}
          <SkillCard name={"C++"}>
            <img src="/cpp.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Python"}>
            <img src="/python.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Numpy"}>
            <img src="/numpy.svg" alt="" className='w-[35px] mx-2' />
          </SkillCard>
          <SkillCard name={"Pandas"}>
            <img src="/pandas.png" alt="" className='w-[25px] mx-2' />
          </SkillCard>
          <SkillCard name={"Matplotlib"}>
            <img src="/matplotlib.png" alt="" className='w-[35px] mx-2' />
          </SkillCard>
        </div>
      </div>
    </div>
  )
}

export default Stack