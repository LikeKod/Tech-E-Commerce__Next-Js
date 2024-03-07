'use client'

import * as React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { CarouselComponent } from "./CarouselComponent"
import Image from 'next/image'
import image1 from "/public/images/card_category/image 12.png";
import Button from '../components/Button/Button'




export default function CardCategory() {
    return (
        <section className="w-full flex mx-auto">
            <div className="flex mx-auto hidden md:flex">
                <div className="items-center text-center max-w-[360px] h-[640px]">
                    <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center flex justify-end bg-card-category'>
                        <Image className='ml-[47px] mb-[27px]' src={image1} alt="watch" />
                    </div>
                    <div className='text-left mx-[32px] mt-[68px] max-w-[296px] max-h-[208px]'>
                        <h3>Popular Products</h3>
                        <p className='font-main text-card-category-p my-[16px] size-3.5 font-medium leading-6 tracking-normal'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <Button title='Shop now' className='size-[14px] w-[162px] h-[48px] decoration-black rounded-lg opacity-100 bg-transparent border border-black' />
                    </div>
                </div>
                <div className="items-center text-center max-w-[360px] h-[640px] bg-card-category-1">
                    <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center flex justify-end'>
                        <img src="/images/card_category/image 64.png" alt="watch" />
                    </div>
                    <div className='text-left mx-[32px] mt-[68px] max-w-[296px] max-h-[208px]'>
                        <h3>Ipad Pro</h3>
                        <p className='font-main text-card-category-p my-[16px] size-3.5 font-medium leading-6 tracking-normal'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <Button title='Shop now' className='size-[14px] w-[162px] h-[48px] decoration-black rounded-lg opacity-100 bg-transparent border border-black' />
                    </div>
                </div>
                <div className="items-center text-center max-w-[360px] h-[640px] bg-card-category-2">
                    <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center'>
                        <img src="/images/card_category/image 41.png" alt="watch" />
                    </div>
                    <div className='text-left mx-[32px] mt-[68px] max-w-[296px] max-h-[208px]'>
                        <h3>Samsung Galaxy </h3>
                        <p className='font-main text-card-category-p my-[16px] size-3.5 font-medium leading-6 tracking-normal'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <Button title='Shop now' className='size-[14px] w-[162px] h-[48px] decoration-black rounded-lg opacity-100 bg-transparent border border-black' />
                    </div>
                </div>
                <div className="items-center text-center max-w-[360px] h-[640px] bg-card-category-3">
                    <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center ml-[78px]'>
                        <img className='max-w-full max-h-full' src="/images/card_category/Macbook_1.png" alt="watch" />
                    </div>
                    <div className='text-left mx-[32px] mt-[68px] max-w-[296px] max-h-[208px]'>
                        <h3>Macbook Pro</h3>
                        <p className='font-main text-card-category-p my-[16px] size-3.5 font-medium leading-6 tracking-normal'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <Button title='Shop now' className='size-[14px] w-[162px] h-[48px] text-white rounded-lg opacity-100 bg-transparent border border-white' />
                    </div>
                </div>
            </div >
            <CarouselComponent />
        </section >
    )
}