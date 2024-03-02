import { useDispatch } from 'react-redux'
import { incrementCartQty } from '../../shared/redux/slices/cartSlice'
import AddIcon from '@mui/icons-material/Add';

const IncrementCart = ({ product }) => {
    const dispatch = useDispatch()

    return (
        <div className='flex items-center gap-x-4'>
            <button
                className=" text-stone-950  hover:text-red-600  "
                onClick={() => dispatch(incrementCartQty(product))}
            >
                <AddIcon />
            </button>
        </div>
    );
};

export default IncrementCart;