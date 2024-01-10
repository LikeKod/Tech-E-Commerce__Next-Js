'use client'

// import './Product.css'
import Image from "next/image";
import favoriteIcon from '/public/images/Icons/Favorite_duotone-red.svg'
import { useState } from 'react';
import { Sanitizer } from '@mui/icons-material';
import {isEmpty} from 'lodash';


export default function ProductCart({ product }) {

    if( isEmpty( product ) ) {
        return null;
    }

    // get first image from array
    const img = product?.images[0] ?? {};
    // get type of product array
    const productType = product?.type ?? '';


    return (
        <div className="flex gap-y-4 flex-col items-center w-[268px] max-h-[455px] px-6 py-4 bg-[#F6F6F6] rounded-lg text-center">
            <Image className="w-8 self-end" src={favoriteIcon} alt="favourite-icon" />
            <a
                className="grow"
                href={product.permalink}>

                <div className='flex flex-col gap-y-4 items-center h-full'>

                    <div className="mb-2 w-full h-[160px] relative ">
                        <img 
                        className="object-cover object-center h-full"
                        src={img?.src ?? ''} 
                        alt={img?.alt}
                        />
                    </div>

                    <div className="grow">{product.name}</div>
                    <div className="font-semibold text-[24px]">$ {product.price}</div>                    
                </div>
            </a>

            <button type="button" className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-md text-sm text-center inline-flex items-center px-16 py-3 mt-auto">
                В корзину
            </button>
        </div>
    );
}