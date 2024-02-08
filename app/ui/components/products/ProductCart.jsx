'use client'

import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../../context/ShopingCartContext';
import { isEmpty } from 'lodash';
import AddToCart from '../Cart/AddToCart';
import AddToFavourite from '../wishList/AddToFavourite'
import Link from 'next/link';


export default function ProductCart({ product }) {
    if (isEmpty(product)) {
        return null;
    }

    const { wishList, addToWishList, removerFromWishList } = useContext(AppContext);
    const [isAdded, setIsAdded] = useState(false);
    
    // get first image from array
    const img = product?.images[0] ?? {};    
    
    useEffect(() => {
        if(product) {
            setIsAdded(wishList.find(item => item.id === product.id));
        }
    }, [wishList])

    return (
        product ?
        <div className="flex gap-y-4 flex-col items-center w-[268px] max-h-[455px] px-6 py-4 bg-[#F6F6F6] rounded-lg text-center">
            
            <AddToFavourite id={product.id} isAdded={isAdded} setIsAdded={setIsAdded} />

            <Link className="grow" href={`/product/${product?.id}`}>
                <div className='flex flex-col gap-y-4 items-center h-full'>
                    <div className="mb-2  w-full h-[160px] relative ">
                        <img
                            className="object-cover object-center h-full ms-auto me-auto"
                            src={img?.src ?? ''}
                            alt={img?.alt}
                        />
                    </div>

                    <div className="grow">{product.name}</div>
                    <div className="font-semibold text-[24px]">$ {product.price}</div>
                </div>
            </Link>

            <AddToCart product={product} />
        </div> 
        :
        <h3> Loading... </h3>
    );





}