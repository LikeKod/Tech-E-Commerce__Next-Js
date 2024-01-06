'use client'

import './Product.css'
import Image from "next/image";
import favoriteIcon from '/public/images/Icons/Favorite_duotone-red.svg'



export default function Product({ product }) {
    return (
        <div className="product__cart product">
            <Image className="product__cart-icon" src={favoriteIcon} alt="favourite-icon" />
            <a 
            className='flex flex-col items-center' 
            href={`/product/${product.id}`}>
                <div className="product__image">
                    <img src={product.image} alt="product-image" />
                </div>

                <div className="product__cart-title grow"><p>{product.name}</p></div>
                <div className="product__cart-price">$ {product.price}</div>

            </a>
            <button className="button btn__black mx-auto">
                <p>В корзину</p>
            </button>
        </div>
    );
}