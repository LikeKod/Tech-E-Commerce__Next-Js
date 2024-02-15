'use client'
import "./style.css";
import ShoppingItem from "./ShoppingItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
    const cart = useSelector(((state) => state.cart))
    const [showChild, setShowChild] = useState(false);  

    const products = cart?.map((cartItem) => {
        return <ShoppingItem key={cartItem.id} cartItem={cartItem} />
    })

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) {
        return null;
    }

    if (typeof window === 'undefined') {
        return <></>;
    } else {
        return (
            <div className={"container__shop-cart"}>
                <div className={`shop__order`} >
                    <div className={"shopping__cart"}>
                        <h1 className={"shopping__cart-title"}>Shopping Cart</h1>
                        <div className={"shopping__cart-items"}>
                            {cart?.length > 0 && products}
                        </div>
                    </div>
                    <div className={"order__summary"}>
                    <h1 className={"order__summary-title"}>Order Summary</h1>
                    <div className={"contact-form"}>
                        <label className={"contact-form-label"}>
                            <span>Discount code / Promo code</span>
                            <input type="text" className={"contact-input"} placeholder=' code' />
                        </label>
                        <label className={"contact-form-label"}>
                            <span>Your bonus card number</span>
                            <input type="text" className={"contact-input"} placeholder=' Enter Card Number' />
                            <button type="submit" className="apply">Apply</button>
                        </label>
                        <div className={"total-info"}>
                            <div className={"subtotal info-t"}>
                                <div className={"subtotal-name sname"}>
                                    Subtotal
                                </div>
                                <div className={"subtotal-price"}>
                                    $2347
                                </div>
                            </div>
                            <div className={"tax info-t"}>
                                <div className={"tax-name tname"}>
                                    Estimated Tax
                                </div>
                                <div className={"tax-price"}>
                                    $50
                                </div>

                            </div>
                            <div className={"shipHand info-t"}>
                                <div className={"shipHand-name tname"}>
                                    Estimated shipping & Handling
                                </div>
                                <div className={"shipHand-price"}>
                                    $29
                                </div>
                            </div>
                            <div className={"total info-t"}>
                                <div className={"total-name sname"}>
                                    Total
                                </div>
                                <div className={"total-price"}>
                                    $2426
                                </div>
                            </div>
                        </div>
                        <button className={"checkout"} onClick={() => handcleClick()} >Checkout</button>
                    </div>
                </div>
                </div>
            </div>
        )}
    }