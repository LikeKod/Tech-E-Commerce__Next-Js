'use client'

import './Product.css'
import Image from "next/image";
import favoriteIcon from '/public/images/Icons/Favorite_duotone-red.svg'



export default function Product({productImg}) {
    return (
        <div className="product__cart product">
            <Image className="product__cart-icon" src={favoriteIcon} alt="favourite-icon"/>
            <div className="product__image">
                <Image src={productImg} alt="product-image"/>
            </div>
            
            <div className="product__cart-title">Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</div>
            <div className="product__cart-price">&#36 1399</div>
            <button className="btn__full">
                <p>Label</p>
            </button>
        </div>
    );
}