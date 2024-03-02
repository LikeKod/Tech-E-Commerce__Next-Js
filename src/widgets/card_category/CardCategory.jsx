'use client'

import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from "react-responsive-carousel"
import Image from 'next/image'
import './CardCategory.css'
import image1 from "/public/images/card_category/image 12.png";




export default function CardCategory() {
    return (
        <section className="w-full flex mx-auto">
            <div className="flex mx-auto hidden md:flex">
                <div className="items-center text-center max-w-[360px] h-[640px]">
                    <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center flex justify-end bg-card-category'>
                        <Image className='ml-[47px] mb-[27px]' src={image1} alt="watch" />
                    </div>
                    <div className={"card__category__description"}>
                        <h3>Popular Products</h3>
                        <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button className={"btn__black-small"}>
                            <p>Shop Now</p>
                        </button>
                    </div>
                </div>

                </div>

        <Carousel showStatus={false} showArrows={false} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='block md:hidden max-w-[375px] mx-auto'>
            <div className="items-center text-center max-w-[360px] h-[640px]">
                <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center bg-card-category'>
                    <Image className='max-w-[262px] max-h-[308px]' src={image1} alt="watch" />
                </div>
                <div className={"card__category__description"}>
                    <h3>Popular Products</h3>
                    <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <button className={"btn__black-small"}>
                        <p>Shop Now</p>
                    </button>
                </div>
            </div>
        </Carousel>
        </section >
    )
}