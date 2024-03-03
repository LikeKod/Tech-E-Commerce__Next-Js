'use client'
import ShoppingCart from "../../../widgets/ShoppingCart"
import '../../pages/cart/cart.css';
import {store} from "../../../shared/redux/store";
import {Provider } from 'react-redux'

export default function Cart() {
    return (
        <Provider store={store}>
            <div className={"wrapper"}>
                <ShoppingCart />
                <div className={`sum__pay `}>
                    {/* <Payment /> */}
                </div>
            </div>
        </Provider>
    )
}