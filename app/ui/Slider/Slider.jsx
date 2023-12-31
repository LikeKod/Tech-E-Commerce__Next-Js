"use client";
import React, {useRef,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import "swiper/css/grid";

import { Grid, Navigation } from 'swiper/modules';
import BtnSlider from '../components/Swiper'
import './Slider.css'

import Phones from '/public/images/Icons/Phones-48.svg'
import SmartWatches from '/public/images/Icons/Smart_Watches-48.svg'
import Cameras from '/public/images/Icons/Cameras-48.svg'
import Headphones from '/public/images/Icons/Headphones-48.svg'
import Computers from '/public/images/Icons/Computers-48.svg'
import Gaming from '/public/images/Icons/Gaming-48.svg'


export default function Slider() {
  return (
    <div className="Slider">
      <Swiper
      slidesPerView={2}
      spaceBetween={16}
      grid={{
        rows: 3,
        fill: "row",
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev'
      }}
      breakpoints={{
        400: {
          slidesPerView: 3,
          spaceBetween: 16,
          rows: 3,
          fill: "row",
        },
        600: {
          slidesPerView: 4,
          spaceBetween: 16,
          rows: 3,
          fill: "row",
        },
        900: {
          slidesPerView: 5,
          spaceBetween: 32,
          rows: 3,
          fill: "row",
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 32,
          rows: 3,
          fill: "row",
        }
        
      }}
      modules={[Grid, Navigation]}
      className='mySwiper'
        >
        <BtnSlider className="change slider" />
        <SwiperSlide>
        <Image className='Slider-img' src={Phones} alt="Phones" style={{width: '48'}} />
        <div className="text">Phones</div>
        </SwiperSlide>
      <SwiperSlide>
        <Image className='Slider-img' src={SmartWatches} alt="Smart Watches" style={{width: '48'}} />
        <div className="text">Smart Watches</div>
        </SwiperSlide>
      <SwiperSlide>
        <Image className='Slider-img' src={Cameras} alt="Cameras" style={{width: '48'}} />
        <div className="text">Cameras</div>
        </SwiperSlide>
      <SwiperSlide>
        <Image className='Slider-img' src={Headphones} alt="Headphones" style={{width: '48'}} />
        <div className="text">Headphones</div>
        </SwiperSlide>
      <SwiperSlide>
        <Image className='Slider-img' src={Computers} alt="Computers" style={{width: '48'}} />
        <div className="text">Computers</div>
        </SwiperSlide>
      <SwiperSlide>
        <Image className='Slider-img' src={Gaming} alt="Gaming" style={{width: '48'}} />
        <div className="text">Gaming</div>
        </SwiperSlide>
      <SwiperSlide>
        <Image className='Slider-img' src={Gaming} alt="Gaming" style={{width: '48'}} />
        <div className="text">Gaming</div>
        </SwiperSlide>
    </Swiper>
    </div>
  );
}


