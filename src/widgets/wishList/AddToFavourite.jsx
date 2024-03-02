// 'use client'

import { useContext, useEffect } from 'react';
import { AppContext } from '../../shared/context/ShopingCartContext';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { red } from '@mui/material/colors';


export default function AddToFavourite({ id, isAdded, setIsAdded }) {
    const { addToWishList, removerFromWishList } = useContext(AppContext);
    
    function addFavourite(id) {
        setIsAdded(true)
        addToWishList(id)
    }

    function deleteFavourite(id) {
        setIsAdded(false)
        removerFromWishList(id)
    }

    useEffect(() => {
    }, [isAdded])


    return (
        <>
            {
                isAdded ?
                    <button
                        className="self-end"
                        // onClick={() => removerFromWishList(product?.id)}
                        onClick={() => deleteFavourite(id)}

                    >
                        <FavoriteIcon
                            className="w-8"
                            sx={{ color: red[500], fontSize: 32 }}
                        />
                    </button>
                    :
                    <button
                        className="self-end"
                        // onClick={() => addToWishList(product?.id)}
                        onClick={() => addFavourite(id)}
                    >
                        <FavoriteBorderIcon
                            className="w-8"
                            sx={{ fontSize: 32 }}
                        />
                    </button>
            }
        </>
    )
}