import React from 'react'
import { useSwiper } from 'swiper/react'

export default function BtnSlider({title, children}) {
const swiper = useSwiper()
return (
  <div className='section-header'>
    <div className='section-header__body align-items-center'>
      <h2 className='section-header__title'>
      Browse By Category
      </h2>
      <div className='section-header__arrows'>
      
        {children}
        <div
        className='arrow section-header__arrow section-header__arrow--prev arrow--prev'
        onClick={()=> swiper.slidePrev()}
        >
          <button className='arrow__button ' type='button'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3333 27.6667C21.0679 27.6679 20.8132 27.5622 20.6267 27.3733L9.95999 16.7067C9.57006 16.3162 9.57006 15.6838 9.95999 15.2933L20.6267 4.62667C21.0207 4.25952 21.6347 4.27035 22.0155 4.65117C22.3963 5.03199 22.4071 5.64599 22.04 6.04L12.08 16L22.04 25.96C22.4299 26.3504 22.4299 26.9829 22.04 27.3733C21.8535 27.5622 21.5987 27.6679 21.3333 27.6667Z" fill="#2E2E2E"/>
</svg>
          </button>
        </div>
        <div
        className='arrow section-header__arrow section-header__arrow--next arrow--next'
        onClick={()=> swiper.slideNext()}
        >
          <button className='arrow__button ' type='button'>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 4.33333C10.9322 4.33208 11.1869 4.43782 11.3734 4.62667L22.0401 15.2933C22.43 15.6838 22.43 16.3162 22.0401 16.7067L11.3734 27.3733C10.9794 27.7405 10.3654 27.7296 9.98457 27.3488C9.60375 26.968 9.59292 26.354 9.96007 25.96L19.9201 16L9.96007 6.04C9.57013 5.64958 9.57013 5.01709 9.96007 4.62667C10.1466 4.43782 10.4013 4.33208 10.6667 4.33333Z" fill="black"/>
</svg>
          </button>
          </div>
      </div>
    </div>
  </div>
)
}