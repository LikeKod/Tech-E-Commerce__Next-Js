'use client'

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';
import { isEmpty } from 'lodash';
import AddToCart from '../Cart/AddToCart';
import { useState } from 'react';


export default function ProductCart({ product }) {

    const [favourite, setFavourite] = useState(false);

    if (isEmpty(product)) {
        return null;
    }

    // get first image from array
    const img = product?.images[0] ?? {};
    // get type of product array
    const productType = product?.type ?? '';


    return (
        <div className="flex gap-y-4 flex-col items-center w-[268px] max-h-[455px] px-6 py-4 bg-[#F6F6F6] rounded-lg text-center">
            {
                favourite ?
                    <FavoriteIcon
                        className="w-8 self-end"
                        sx={{ color: red[500], fontSize: 32 }}
                    />
                    :
                    <FavoriteBorderIcon
                        className="w-8 self-end"
                        sx={{ fontSize: 32 }}
                    />
            }

            <a
                className="grow"
                href={`/product/${product?.slug}`}>

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

            <AddToCart product={product} />
        </div>
    );
}