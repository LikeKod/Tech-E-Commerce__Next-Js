import React, { useEffect, useState, useRef } from 'react';
import { isEmpty } from "lodash";
import Image from '../image';
import { deleteCartItem, updateCart } from '../../utils/cart'
import ClearIcon from '@mui/icons-material/Clear';


const CartItem = ({
    item,
    products,
    setCart
}) => {

    const [productCount, setProductCount] = useState(item.quantity);
    const [updatingProduct, setUpdatingProduct] = useState(false);
    const [removingProduct, setRemovingProduct] = useState(false);
    const productImg = item?.data?.images?.[0] ?? '';

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true

        // When component is unmounted, set isMounted.current to false.
        return () => {
            isMounted.current = false
        }
    }, [])

    const handleRemoveProductClick = (event, cartKey) => {
        event.stopPropagation();

        // If the component is unmounted, or still previous item update request is in process, then return.
        if (!isMounted || updatingProduct) {
            return;
        }

        deleteCartItem(cartKey, setCart, setRemovingProduct);
    };

    const handleQtyChange = (event, cartKey, type) => {

        if (process.browser) {

            event.stopPropagation();
            let newQty;

            // If the previous cart request is still updatingProduct or removingProduct, then return.
            if (updatingProduct || removingProduct || ('decrement' === type && 1 === productCount)) {
                return;
            }

            if (!isEmpty(type)) {
                newQty = 'increment' === type ? productCount + 1 : productCount - 1;
            } else {
                // If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
                newQty = (event.target.value) ? parseInt(event.target.value) : 1;
            }

            // Set the new qty in state.
            setProductCount(newQty);

            if (products.length) {
                updateCart(item?.key, newQty, setCart, setUpdatingProduct);
            }

        }
    };

    return (
        <div className={"shopping__cart-item"}>
            <Image
                src={IphoneB}
                alt="iphoneB" />
            <div className={"shopping__cart-info"}>
                <div className={"shopping__cart-info__product"}>
                    Apple iPhone 14 Pro Max 128Gb Deep Purple
                </div>
                <div className={"shopping__cart-article"}>#25139526913984</div>
            </div>
            <div className={"shopping__cart-pagintaion"}>
                <button
                    className={"minus"}
                    onClick={(event) => handleQtyChange(event, item?.cartKey, 'decrement')}
                >-</button>
                <div className={"shopping__cart-score"}>1</div>
                <button
                    className={"plus"}
                    onClick={(event) => handleQtyChange(event, item?.cartKey, 'increment')}
                >+</button>
            </div>
            <div className={"shopping__cart-price"}>50$</div>
            <div className={"shopping__cart-delete"}>
                <ClearIcon />
            </div>
        </div>
    )

}