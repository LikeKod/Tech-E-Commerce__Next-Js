import { useDispatch } from 'react-redux'
import {incrementCartQty} from '../../../../redux/slices/cartSlice'

const AddToCart = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center gap-x-4'>
            <button
                className=" text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm text-center inline-flex items-center px-12 py-3  "
                onClick={() => dispatch(incrementCartQty( product ))}
            >
                В корзину
            </button>
        </div>
    );
};

export default AddToCart;
