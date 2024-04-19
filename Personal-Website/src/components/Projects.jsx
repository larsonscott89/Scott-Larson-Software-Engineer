import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Navigation, Pagination, EffectCoverflow} from 'swiper/modules'

import project1_image1 from '../assets/Bartenders Best Friend Landing Page.png'
import project1_image2 from '../assets/Bartenders Best Friend Drink List.png'
import project1_image3 from '../assets/Bartenders Best Friend Drink Details.png'

export default function Projects () {
  return (
    <div>
      <div>
        <h1 className='title-label'>Projects</h1>
      </div>
      <div>
      <h5>Welcome to the project section of my portfolio. Here, you'll find a curated list of projects I've undertaken, presented in chronological order. From   the inception of Bartenders Best Friend to the latest creation of BCS Darts, each project represents a significant milestone in my journey as a software engineer.</h5>
      <h5>Every project description includes links to its corresponding GitHub repository and, if applicable, the deployed website. As any seasoned software engineer knows, a project is never truly finished. Updates and improvements are an integral part of the development process. Therefore, I encourage you to revisit this section periodically to explore the latest enhancements and additions.</h5>
      <h5>Thank you for visiting, and I hope you find inspiration and insight within these projects.</h5>
      </div>
      <div>
        <h1> Bartenders Best Friend </h1>
        <Swiper
        effect={'coverflow'}
        centeredSlides={true}
        loop={true}
        slidesPerView={'3'}
        spaceBetween={-400}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        autoplay={{ delay: 3000 }}
        className="swiper_container"
        >
          <SwiperSlide>
            <img src={project1_image1} alt='Landing Page' style={{ width: '50%', height: '70%' }}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={project1_image2} alt='Drink List' style={{ width: '50%', height: '70%' }}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={project1_image3} alt='Drink Details' style={{ width: '50%', height: '70%' }}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={project1_image1} alt='Landing Page' style={{ width: '50%', height: '70%' }}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={project1_image2} alt='Drink List' style={{ width: '70%', height: '70%' }}/>
          </SwiperSlide>
          <SwiperSlide>
            <img src={project1_image3} alt='Drink Details' style={{ width: '70%', height: '70%' }}/>
          </SwiperSlide>
          <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        </Swiper>
        <div>
        <h5 className='project1-description'>"Bartenders Best Friend" is your go-to solution for those moments when you find yourself at a loss for what to order at a restaurant or bar. Leveraging an API call alongside HTML, CSS, and JavaScript, this project empowers users to effortlessly search for a drink either by its name or by specifying a particular type of liquor they desire. Whether you're craving a classic cocktail or exploring new flavors, Bartenders Best Friend provides a curated selection of drinks to suit every taste and occasion.</h5>
        </div>
      </div>
    </div>
  )
}