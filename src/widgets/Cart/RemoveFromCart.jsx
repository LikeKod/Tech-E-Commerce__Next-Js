import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../shared/redux/slices/cartSlice'
import ClearIcon from '@mui/icons-material/Clear';

const RemoveFromCart = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center gap-x-4'>
            <button
                className=" text-stone-950  hover:text-red-600   "
                onClick={() => dispatch(removeFromCart(product))}
            >
                <ClearIcon/>
            </button>
        </div>
    );
};

export default RemoveFromCart;

