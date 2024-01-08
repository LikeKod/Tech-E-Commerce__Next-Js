'use client'

import './Product.css'
import Image from "next/image";
import favoriteIcon from '/public/images/Icons/Favorite_duotone-red.svg'
import { useState } from 'react';



export default function Product({ product }) {

    // получаем первое фото из массива фотографий
    let firstImgUrl = '';
    if (product.images) {
        firstImgUrl = product?.images[0].src;
        console.log(firstImgUrl)
    }

    return (
        <div className="product__cart product">
            <Image className="product__cart-icon" src={favoriteIcon} alt="favourite-icon" />
            <a
                href={`/product/${product.id}`}>
                <div className='flex flex-col gap-y-4 items-center'>
                    
                        <div className="product__image">
                            <img src={firstImgUrl} alt="product-image" />
                        </div>
                       
                    <div className="product__cart-title grow"><p>{product.name}</p></div>
                    <div className="product__cart-price">$ {product.price}</div>
                </div>
            </a>
            <button className="button btn__black mx-auto">
                <p>В корзину</p>
            </button>
        </div>
    );
}