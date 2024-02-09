'use client'
import Image from 'next/image'
import MainLayout from "../layouts/MainLayout"
import Payment from "./sum__pay/Payment"

import IphoneB from '/public/images/Payment/iphoneB.png';
import AirB from '/public/images/Payment/airB.png';
import WatchB from '/public/images/Payment/watchB.png';

import '../orders/sum__pay/ShoppingCart.css';
import { useState } from 'react';

export default function Product() {
    const [isOp, setIsOp] = useState(true)

    

    function handcleClick() {
        setIsOp(!isOp)
    }
    return (

        <MainLayout>
            <div className={"wrapper"}>
                <div className={`container__shop-cart  ${isOp ? 'bloc' : 'hidden'}`}>
                    <div className={`shop__order`} >
                        <div className={"shopping__cart"}>
                            <h1 className={"shopping__cart-title"}>Shopping Cart</h1>
                            <div className={"shopping__cart-items"}>
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
                                        <button className={"minus"}>-</button>
                                        <div className={"shopping__cart-score"}>1</div>
                                        <button className={"plus"}>+</button>
                                    </div>
                                    <div className={"shopping__cart-price"}>50$</div>
                                    <div className={"shopping__cart-delete"}>+</div>
                                </div>
                                <div className={"shopping__cart-item"}>
                                    <Image
                                        src={AirB}
                                        alt="airB" />
                                    <div className="shopping__cart-info">
                                        <div className="shopping__cart-info__product">
                                            Apple iPhone 14 Pro Max 128Gb Deep Purple
                                        </div>
                                        <div className="shopping__cart-article">#25139526913984</div>
                                    </div>
                                    <div className="shopping__cart-pagintaion">
                                        <button className="minus">-</button>
                                        <div className="shopping__cart-score">1</div>
                                        <button className="plus">+</button>
                                    </div>
                                    <div className="shopping__cart-price">50$</div>
                                    <div className="shopping__cart-delete">+</div>
                                </div>
                                <div className={"shopping__cart-item"}>
                                    <Image
                                        src={WatchB}
                                        alt="WatchB" />
                                    <div className="shopping__cart-info">
                                        <div className="shopping__cart-info__product">
                                            Apple iPhone 14 Pro Max 128Gb Deep Purple
                                        </div>
                                        <div className="shopping__cart-article">#25139526913984</div>
                                    </div>
                                    <div className="shopping__cart-pagintaion">
                                        <button className="minus">-</button>
                                        <div className="shopping__cart-score">1</div>
                                        <button className="plus">+</button>
                                    </div>
                                    <div className="shopping__cart-price">50$</div>
                                    <div className="shopping__cart-delete">+</div>
                                </div>
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

                <div className={`sum__pay ${!isOp ? 'block' : 'hidden'}`}>
                    <Payment />
                </div>
            </div>

        </MainLayout>
    )
}