import { useDispatch } from 'react-redux'
import { decrementCartQty } from '../../shared/redux/slices/cartSlice'
import RemoveIcon from '@mui/icons-material/Remove';

const DecrementCart = ({ product }) => {
    const dispatch = useDispatch()


    return (
        <div className='flex items-center gap-x-4'>
            <button
                className=" text-stone-950  hover:text-red-600  "
                onClick={() => dispatch(decrementCartQty(product))}
            >
                <RemoveIcon/>
            </button>
        </div>
    );
};

export default DecrementCart;