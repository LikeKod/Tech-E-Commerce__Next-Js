import Image from 'next/image'
import IphoneMini from '/public/images/Payment/Phonemini.jpg';
import AirMini from '/public/images/Payment/airmini.jpg';
import WatchMini from '/public/images/Payment/watch-mini.jpg';
import Card from '/public/images/Payment/cardf.jpg';
import loc from '/public/images/Payment/Location.svg';
import ship from '/public/images/Payment/Payment.svg';
import pay from '/public/images/Payment/Shipping.svg';
import toEdit from '/public/images/Icons/To_edit-24.svg'
import Close from '/public/images/Icons/Close-24.svg'
import Plus from '/public/images/Icons/Plus-24.svg'


import { useState } from "react"

import "./Payment.css"

export default function Payment() {
    const [isOpen, setIsOpen] = useState(true)
    const [isShipment, setIsShipment] = useState(true)
    const [ispayment, setPayment] = useState(false)

    function handleClick1() {
        setIsOpen(!isOpen);
        setIsShipment(!isShipment);
    }

    function handleClick2() {
        setIsShipment(!isShipment);
        setPayment(!ispayment)
    }

    function backClick1() {
        setIsShipment(!isShipment);
        setPayment(!ispayment)
    }

    function backClick2() {
        setIsOpen(!isOpen);
        setIsShipment(!isShipment);
    }

    return (
        <div className={"content"}>
            <div className={'container'} id={'steps'}>
                <div className={'steps'}>
                    <ul className={"steps-menu"}>
                        <li className={`steps-menu__item ${isOpen ? '' : 'light'}`} id={'loc'}>
                            <a href='#'> Step 1 <br /> Address</a>
                            <Image
                                src={loc}
                                alt='loc' />
                        </li>
                        <div className={"block__line"}></div>
                        <li className={`steps-menu__item ${!isShipment ? ' ' : 'light'}`}>
                            <a className={'light'} href='#'>Step 2 <br /> Shipping</a>
                            <Image
                                src={ship}
                                alt='ship' />
                        </li>
                        <div className={"block__line"}></div>
                        <li className={`steps-menu__item ${ispayment ? ' ' : 'light'}`}>
                            <a href='#'> Step 3 <br /> Payment</a>
                            <Image
                                src={pay}
                                alt='pay' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={`container ${isOpen ? "block" : 'hidden'}`} id={'select__address'}>
                <div className={"content__address-shipping"}>
                    <div className={"text__address"}>Select Address</div>
                    <div className={"container__radio-btn"}>
                        <div className={"address__radio-btn"}>
                            <div className={"content__address-text"}>
                                <label className={"radio-btn-a"}>
                                    <input type="radio" name="myRadio" value="Thornridge" />
                                    <div className={"text__radio-btn"}>2118 Thornridge</div>
                                    <div className={"text__radio-location"}>
                                        <p>HOME</p>
                                    </div>
                                </label>
                                <div className={"text__address-location"}>
                                    <p>
                                        2118 Thornridge Cir. Syracuse, Connecticut 35624
                                    </p>
                                    <p>
                                        (209) 555-0104
                                    </p>
                                </div>
                            </div>
                            <div className={"image__address"}>
                                <li className={"image__to-edit"}>
                                    <Image
                                        src={toEdit}
                                        alt='Edit'
                                    />
                                </li>
                                <li className={"image__close"}>
                                    <Image
                                        src={Close}
                                        alt='close'
                                    />
                                </li>
                            </div>
                        </div>
                        <div className={"address__radio-btn"}>
                            <div className={"content__address-text"}>
                                <label className={"radio-btn-a"}>
                                    <input className="TRTR" type="radio" name="myRadio" value="Headoffice" />
                                    <div className={"text__radio-btn"}>Headoffice</div>
                                    <div className="text__radio-location">
                                        <div>OFFICE</div>
                                    </div>
                                </label>
                                <div className={"text__address-location"}>
                                    <p>
                                        2715 Ash Dr. San Jose, South Dakota 83475
                                    </p>
                                    <p>
                                        (704) 555-0127
                                    </p>
                                </div>
                            </div>
                            <div className={"image__address"}>
                                <li className={"image__to-edit"}>
                                    <Image
                                        src={toEdit}
                                        alt='Edit'
                                    />
                                </li>
                                <li className={"image__close"}>
                                    <Image
                                        src={Close}
                                        alt='close'
                                    />
                                </li>
                            </div>
                        </div>
                        <div className="block">
                            <div className={"block__row"}>
                                <div className={"block__line-right"}></div>
                                <div className={"block__text"}>
                                    <Image src={Plus}
                                        alt='plus'
                                    />
                                </div>
                                <div className={"block__line-left"}></div>
                            </div>
                        </div>
                    </div>
                    <div className={"btn__shipping"}>
                        <button className={"btn__black-small"}>
                            <p>Back</p>
                        </button>
                        <button className="button btn__black" onClick={() => handleClick1()}>
                            <p>Next</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`container ${!isShipment ? "block" : 'hidden'}`} id={'shipment__method'}>
                <div className={"content__address-shipping"}>
                    <div className={"text__shipping"}>Shipment Method</div>
                    <div className={"container__radio-btn"}>
                        <div className={"shipping__radio-btn"}>
                            <div className={"content__shipping-text"}>
                                <label className={"radio-btn-s"}>
                                    <input type="radio" name="myRadio" value="Free" />
                                    <div className={"text__radio-shipping"}>Free</div>
                                    <div className={"text__shipping-location"}>
                                        Regulary shipment
                                    </div>
                                </label>
                            </div>
                            <div className={"text__shipping-data"}>
                                17 Oct, 2023
                            </div>
                        </div>
                        <div className={"shipping__radio-btn"}>
                            <div className={"content__shipping-text"}>
                                <label className={"radio-btn-s"}>
                                    <input type="radio" name="myRadio" value="$8.50e" />
                                    <div className={"text__radio-shipping"}>$8.50</div>
                                    <div className={"text__shipping-location"}>
                                        Get your delivery as soon as possible
                                    </div>
                                </label>
                            </div>
                            <div className={"text__shipping-data"}>
                                1 Oct, 2023
                            </div>
                        </div>
                        <div className={"shipping__radio-btn"}>
                            <div className={"content__shipping-text"}>
                                <label className={"radio-btn-s"}>
                                    <input type="radio" name="myRadio" value="Schedule" />
                                    <div className={"text__radio-shipping"}>Schedule</div>
                                    <div className={"text__shipping-location"}>
                                        Pick a date when you want to get your delivery
                                    </div>
                                </label>
                            </div>
                            <div className='text__shipping-data'>
                                Select Date
                            </div>
                        </div>
                    </div>
                    <div className="btn__shipping">
                        <button className="btn__black-small" onClick={() => backClick2()}>
                            <p>Back</p>
                        </button>
                        <button className="button btn__black" onClick={() => handleClick2()}>
                            <p>Next</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`container ${ispayment ? "block" : 'hidden'}`} id={'payment'} >
                <div className={'content__inner'}>
                    <div className={"summary"}>
                        <h1>Summary</h1>
                        <ul className={"products"}>
                            <li className={"product"}>
                                <Image
                                    src={IphoneMini}
                                    alt="iphone" />
                                <span className={"product-name"}>
                                    Apple iPhone 14 Pro Max 128Gb
                                </span>
                                <div className={"price"}>
                                    $1399
                                </div>
                            </li>
                            <li className={"product"}>
                                <Image
                                    src={AirMini}
                                    alt="air" />
                                <span className={"product-name"}>
                                    AirPods Max Silver
                                </span>
                                <div className={"price"}>
                                    $549
                                </div>
                            </li>
                            <li className={"product"}>
                                <Image
                                    src={WatchMini}
                                    alt="watch" />
                                <span className={"product-name"}>
                                    Apple Watch Series 9 GPS 41mm
                                </span>
                                <div className={"price"}>
                                    $399
                                </div>
                            </li>
                        </ul>
                        <div className={"info"}>
                            <div className={"addres"}>
                                <div className={"addres-top top"}>
                                    Address
                                </div>
                                <div className={"addres-name name"}>
                                    1131 Dusty Townline, Jacksonville, TX 40322
                                </div>
                            </div>
                            <div className={"shipping"}>
                                <div className={"shipping-top top"}>
                                    Shipment method
                                </div>
                                <div className={"shipping-name name"}>
                                    Free
                                </div>
                            </div>
                        </div>
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
                    </div>
                    <div className={"payment"}>
                        <h1>Payment</h1>
                        <ul className={"nav"}>
                            <li className={"nav-list"}>Credit Card</li>
                            <li className={"nav-list"}>PayPal</li>
                            <li className={"nav-list"}>PayPal Credit</li>
                        </ul>
                        <div className={"card"}>
                            <Image
                                src={Card}
                                alt="card" />
                        </div>
                        <div className={"contact-form"}>
                            <label className={"contact-form-label"}>
                                <input type="text" className={"contact-input"} placeholder='Cardholder Name' />
                            </label>
                            <label className={"contact-form-label"}>
                                <input type="text" className={"contact-input"} placeholder='Card Number' />
                            </label>
                            <label className={"contact-form-label exp"}>
                                <input type="text" className={"contact-input"} placeholder='Exp.Date' />
                                <input type="text" className={"contact-input"} placeholder='CVV' />
                            </label>
                            <div className={'checkbox'}>
                                <input type={"checkbox"} id="checkbox" name="checkbox" />
                                <label htmlFor="same">Same as billing address</label>
                            </div>
                            <div className={"btn-box"}>
                                <button className={"btn-white"} onClick={() => backClick1()}>Back</button>
                                <button className={"btn-black"} type='submit'>Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}