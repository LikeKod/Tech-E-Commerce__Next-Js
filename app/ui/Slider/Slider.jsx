"use client";
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'

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
        <div className="slider container my-20">
            <Swiper
                slidesPerView={6}
                loop={true}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                    '@0.50': {
                        slidesPerView: 4,
                        spaceBetween: 16,
                    },
                    '@0.75': {
                        slidesPerView: 5,
                        spaceBetween: 32,
                    },
                    '@1.0': {
                        slidesPerView: 6,
                        spaceBetween: 32,
                    }

                }}
                modules={[Navigation]}
                className='mySwiper'
            >
                <BtnSlider className="change slider" />
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Phones} alt="Phones" />
                        <div className="text">Phones</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={SmartWatches} alt="Smart Watches" style={{ width: '48' }} />
                        <div className="text">Smart Watches</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Cameras} alt="Cameras" style={{ width: '48' }} />
                        <div className="text">Cameras</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Headphones} alt="Headphones" style={{ width: '48' }} />
                        <div className="text">Headphones</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Computers} alt="Computers" style={{ width: '48' }} />
                        <div className="text">Computers</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Gaming} alt="Gaming" style={{ width: '48' }} />
                        <div className="text">Gaming</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Gaming} alt="Gaming" style={{ width: '48' }} />
                        <div className="text">Gaming</div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-background">
                        <Image className='Slider-img' src={Gaming} alt="Gaming" style={{ width: '48' }} />
                        <div className="text">Gaming</div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}


