import { useContext, useState } from 'react'
import { isEmpty } from 'lodash';
import { AppContext } from '../../../context/ShopingCartContext';
import { addToCart } from '../../../lib/utils/cart/useCart'
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import Link from 'next/link';

const AddToCart = ({ product }) => {

    const {increaseCartQty} = useContext(AppContext);

    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [loading, setLoading] = useState(false);


    if (isEmpty(product)) {
        return null;
    }

    return (
        <div className='flex items-center gap-x-4'>
            <button
                className=" text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm text-center inline-flex items-center px-12 py-3  "
                // onClick={() => addToCart(product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading)}
                onClick={() => increaseCartQty(product?.id)}
                disabled={loading}
            >
                {loading ? 'Добавляем...' : 'В корзину'}
            </button>
            {isAddedToCart && !loading ? (
                <Link className='' href="/cart">
                    <ShoppingCartCheckoutOutlinedIcon fontSize='medium'/>
                </Link>
            ) : null}
        </div>
    );
};

export default AddToCart;
