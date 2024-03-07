import { Carousel } from "react-responsive-carousel"
import Image from 'next/image'
import image1 from "/public/images/card_category/image 12.png";
import Button from '../components/Button/Button'

export default function CarouselComponent() {
    return (
        <Carousel showStatus={false} showArrows={false} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false} className='block md:hidden max-w-[375px] mx-auto'>
            <div className="items-center text-center max-w-[360px] h-[640px]">
                <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center bg-card-category'>
                    <Image className='max-w-[262px] max-h-[308px]' src={image1} alt="watch" />
                </div>
                <div className='text-left mx-[32px] mt-[68px] max-w-[296px] max-h-[208px]'>
                    <h3>Popular Products</h3>
                    <p className='font-main text-card-category-p my-[16px] size-3.5 font-medium leading-6 tracking-normal'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <Button title='Shop now' className='size-[14px] w-[162px] h-[48px] decoration-black rounded-lg opacity-100 bg-transparent border border-black' />
                </div>
            </div>
            <div className="items-center text-center max-w-[360px] h-[640px] bg-card-category-1">
                <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center'>
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
                <div className='bg-contain bg-no-repeat max-w-full max-h-[336px] text-center'>
                    <img className='max-w-full max-h-[500px]' src="/images/card_category/Macbook_1.png" alt="watch" />
                </div>
                <div className='text-left mx-[32px] mt-[68px] max-w-[296px] max-h-[208px]'>
                    <h3>Macbook Pro</h3>
                    <p className='font-main text-card-category-p my-[16px] size-3.5 font-medium leading-6 tracking-normal'>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                    <Button title='Shop now' className='size-[14px] w-[162px] h-[48px] text-white rounded-lg opacity-100 bg-transparent border border-white' />
                </div>
            </div>
        </Carousel>
    )
}