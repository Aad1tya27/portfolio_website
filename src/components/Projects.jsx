import React from 'react'
import {EffectCoverflow, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import ProjectCard from './ProjectCard';

const Projects = () => {

  return (
    <div className='w-full h-screen relative bg-[#141414] text-white flex flex-col items-center justify-center'>
      <h1 className='text-[40px] font-medium text-center p-10'>Projects</h1>
      <Swiper className=' w-full p-2'
        // install Swiper modules
        effect={'coverflow'}
        modules={[Navigation,EffectCoverflow, Pagination, A11y]}
        centeredSlides= {true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          }
        }}
        navigation
        pagination={{ clickable: true }}

        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 50,
          modifier: 4,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <ProjectCard>
            
          </ProjectCard>
        </SwiperSlide>
        {/* <SwiperSlide> <ProjectCard/> </SwiperSlide>
        <SwiperSlide> <ProjectCard/> </SwiperSlide>
        <SwiperSlide> <ProjectCard/> </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default Projects