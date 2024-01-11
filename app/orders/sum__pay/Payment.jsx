import Image from 'next/image'
import IphoneMini from '/public/images/Payment/Phonemini.jpg';
import AirMini from '/public/images/Payment/airmini.jpg';
import WatchMini from '/public/images/Payment/watch-mini.jpg';
import Card from '/public/images/Payment/cardf.jpg';
import { useState } from "react"

import './Address.css'
import "./Payment.css"
import './Shipping.css'

export default function Payment() {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className={"content"}>
            <div className={'container'} id={'steps'}>
                <div className="steps">
                    <div>Step 1 Address</div>
                    <div>Step 2 Shipping</div>
                    <div>Step 3 Payment</div>
                </div>
            </div>
            <div className={`container ${isOpen ? "block" : isOpen ? 'hidden' : 'hidden'}`} id={'payment'} >
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
                                <input type="checkbox" id="same" name="same" />
                                <label htmlFor="same">Same as billing address</label>
                            </div>
                            {/* <div className={"btn-box"}>
                <button className={"btn-white"} type='reset'>Back</button>
                <button className={"btn-black"} type='submit'>Pay</button>
              </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container ${!isOpen ? "block" : isOpen ? 'hidden' : 'hidden'}`} id={'select__address'}>
                <div className="block_shipment-method">
                    <div className="text_shipment-method">Select Address</div>
                    <div className="Radio-Button">
                        <div className="container_Radio-Button">
                            <label>
                                <input type="radio" name="myRadio" value="Thornridge" />
                                <div className="text_radio">2118 Thornridge</div>
                                <div className="text_radio-description">
                                    <p>HOME</p>
                                </div>
                            </label>
                        </div>
                        <div className="container_Radio-Button">
                            <label>
                                <input className="TRTR" type="radio" name="myRadio" value="Headoffice" />
                                <div className="text_radio">Headoffice</div>
                                <div className="text_radio-description">
                                    <div>OFFICE</div>
                                </div>
                            </label>
                        </div>
                    </div>
                    {/* <div className="btn__shipping">
            <button className="btn__black-small">
              <p>Back</p>
            </button>
            <button class="button btn__black">
              <p>Next</p>
            </button>
          </div> */}
                </div>
            </div>
            <div className={`container ${isOpen ? "block" : isOpen ? 'hidden' : 'hidden'}`} id={'shipment__method'}>
                <div className="block_shipment-method">
                    <div className="text_shipment-method">Shipment Method</div>
                    <div className="Radio-Button">
                        <div className="container_Radio-Button">
                            <label>
                                <input type="radio" name="myRadio" value="Free" />
                                <div className="text_radio">Free</div>
                                <div className="text_radio-description">
                                    <p>Regulary shipment</p>
                                    <p>17 Oct, 2023</p>
                                </div>
                            </label>
                        </div>
                        <div className="container_Radio-Button">
                            <label>
                                <input type="radio" name="myRadio" value="$8.50" />
                                <div className="text_radio">$8.50</div>
                                <div className="text_radio-description">
                                    <div>Get your delivery as soon as possible</div>
                                    <div>1 Oct, 2023</div>
                                </div>
                            </label>
                        </div>
                        <div className="container_Radio-Button">
                            <label>
                                <input type="radio" name="myRadio" value="Schedule" />
                                <div className="text_radio">Schedule</div>
                                <div className="text_radio-description">
                                    <div>Pick a date when you want to get your delivery</div>
                                    <div>Select Date</div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'container'}>
                <div className="btn__shipping">
                    <button className="btn__black-small">
                        <p>Back</p>
                    </button>
                    <button class="button btn__black" onClick={() => setIsOpen(!isOpen)}>
                        <p>Next</p>
                    </button>
                </div>
            </div>
        </div>
    );
}