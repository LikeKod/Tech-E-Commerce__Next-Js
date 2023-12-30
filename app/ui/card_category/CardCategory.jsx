'use client'

import * as React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import { Carousel } from "react-responsive-carousel"
import Image from 'next/image'
import './CardCategory.css'
import image1 from "/public/images/card_category/image 12.png";




export default function CardCategory() {
    return (

        <section className={"card__category"}>
            {/* <div className={"card__category__container"}>
                <div className={"card__category__item item-1"}>
                    <div className={"card__category-img"}>
                        <Image src={image1} alt="watch" />
                    </div>
                    <div className={"card__category__description"}>
                        <h3>Popular Products</h3>
                        <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button className={"btn__black-small"}>
                            <p>Shop Now</p>
                        </button>
                    </div>
                </div>
                <div className={"card__category__item item-2"}>
                    <div className={"card__category-img"}>
                        <img src="/images/card_category/image 64.png" alt="watch" />
                    </div>
                    <div className={"card__category__description"}>
                        <h3>Ipad Pro</h3>
                        <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button className={"btn__black-small"}>
                            <p>Shop Now</p>
                        </button>
                    </div>
                </div>
                <div className={"card__category__item item-3"}>
                    <div className={"card__category-img"}>
                        <img src="/images/card_category/image 41.png" alt="watch" />
                    </div>
                    <div className={"card__category__description"}>
                        <h3>Samsung Galaxy </h3>
                        <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button className={"btn__black-small"}>
                            <p>Shop Now</p>
                        </button>
                    </div>
                </div>
                <div className={"card__category__item item-4"}>
                    <div className={"card__category-img"}>
                        <img src="/images/card_category/Macbook_1.png" alt="watch" />
                    </div>
                    <div className={"card__category__description"}>
                        <h3>Macbook Pro</h3>
                        <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                        <button className={"btn__white-small"}>
                            <p>Shop Now</p>
                        </button>
                    </div>
                </div>
            </div> */}
            <div>
                <Carousel showArrows={false} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
                    <div className={"card__category__item item-1"}>
                        <div className={"card__category-img"}>
                            <Image src={image1} alt="watch" />
                        </div>
                        <div className={"card__category__description"}>
                            <h3>Popular Products</h3>
                            <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <button className={"btn__black-small"}>
                                <p>Shop Now</p>
                            </button>
                        </div>
                    </div>
                    <div className={"card__category__item item-2"}>
                        <div className={"card__category-img"}>
                            <img src="/images/card_category/image 64.png" alt="watch" />
                        </div>
                        <div className={"card__category__description"}>
                            <h3>Ipad Pro</h3>
                            <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <button className={"btn__black-small"}>
                                <p>Shop Now</p>
                            </button>
                        </div>
                    </div>
                    <div className={"card__category__item item-3"}>
                        <div className={"card__category-img"}>
                            <img src="/images/card_category/image 41.png" alt="watch" />
                        </div>
                        <div className={"card__category__description"}>
                            <h3>Samsung Galaxy </h3>
                            <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <button className={"btn__black-small"}>
                                <p>Shop Now</p>
                            </button>
                        </div>
                    </div>
                    <div className={"card__category__item item-4"}>
                        <div className={"card__category-img"}>
                            <img src="/images/card_category/Macbook_1.png" alt="watch" />
                        </div>
                        <div className={"card__category__description"}>
                            <h3>Macbook Pro</h3>
                            <p className={"card__category__description-p"}>iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
                            <button className={"btn__white-small"}>
                                <p>Shop Now</p>
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </section>
    )
}