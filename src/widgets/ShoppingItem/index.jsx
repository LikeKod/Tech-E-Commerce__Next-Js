'use client'

import DecrementCart from "../Cart/DecrementCart";
import IncrementCart from "../Cart/IncrementCart";
import RemoveFromCart from "../Cart/RemoveFromCart";
import "./style.css"
import { useEffect } from "react";

export default function ShoppingItem({ cartItem }) {

    return (
        <div className="shopping__cart-item">
            <div className="shopping__cart-info">
                <div className="shopping__cart-info__product">
                    {cartItem?.name}
                </div>
                <div className="shopping__cart-article">#{cartItem?.sku}</div>
            </div>
            <div className="shopping__cart-pagintaion">
                <DecrementCart product={cartItem} />
                <div className="text-base mx-10">
                    {cartItem?.qty}
                </div>
                <IncrementCart product={cartItem} />
                
            </div>
            <div className="text-base">{cartItem?.price}</div>
            <div className="shopping__cart-delete">
                <RemoveFromCart product={cartItem} />
            </div>
        </div>
    );
}
