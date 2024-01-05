import Image from 'next/image'
import IphoneMini from '/public/images/Payment/Phonemini.jpg';
import AirMini from '/public/images/Payment/airmini.jpg';
import WatchMini from '/public/images/Payment/watch-mini.jpg';
import Card from '/public/images/Payment/cardf.jpg';

import "./Payment.css"

export default function Payment() {
  return (
    <div className={"content"}>
      <div className={'container'}>
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
              <div className={"btn-box"}>
                <button className={"btn-white"} type='reset'>Back</button>
                <button className={"btn-black"} type='submit'>Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}