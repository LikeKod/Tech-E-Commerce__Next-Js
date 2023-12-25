import Image from 'next/image'
import Facebook from "/public/images/footer/Facebook-16.svg";
import Twitter from "/public/images/footer/Twitter-16.svg";
import Tiktok from "/public/images/footer/Tiktok-16.svg";
import Instagram from "/public/images/footer/Twitter-16.svg";
import logo from '/public/images/footer/logo-white.png'
import './Footer.css'

export default function Footer() {
    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <div className={"footer__top"}>
                    <div className={"footer__info-column"}>
                        <div className={"footer__logo logo__white"}>
                            <a href="">
                                <Image
                                    priority
                                    src={logo}
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <div className={"footer__info-meesage"}>
                            We are a residential interior design firm located in
                            Portland. Our boutique-studio offers more than
                        </div>
                    </div>
                    <div className={"footer__columns"}>
                        <div className={"footer__column"}>
                            <div className={"footer__column-title"}>Services</div>
                            <ul className={"footer__column"}>
                                <li className={"footer__column-item"}>
                                    Bonus program
                                </li>
                                <li className={"footer__column-item"}>Gift cards</li>
                                <li className={"footer__column-item"}>
                                    Credit and payment
                                </li>
                                <li className={"footer__column-item"}>
                                    Service contracts
                                </li>
                                <li className={"footer__column-item"}>
                                    Non-cash account
                                </li>
                                <li className={"footer__column-item"}>Payment</li>
                            </ul>
                        </div>
                        <div className={"footer__column"}>
                            <div className={"footer__column-title"}>Services</div>
                            <ul className={"footer__column"}>
                                <li className={"footer__column-item"}>
                                    Find an order
                                </li>
                                <li className={"footer__column-item"}>
                                    Terms of delivery
                                </li>
                                <li className={"footer__column-item"}>
                                    Exchange and return of goods
                                </li>
                                <li className={"footer__column-item"}>Guarantee</li>
                                <li className={"footer__column-item"}>
                                    Frequently asked questions
                                </li>
                                <li className={"footer__column-item"}>
                                    Terms of use of the site
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={"footer__bottom"}>
                    <div className={"social-list social-list--footer"}>
                        <a href="#">
                            <Image
                                priority
                                src={Twitter}
                                alt="Twitter"
                            />
                        </a>
                        <a href="#">
                            <Image
                                priority
                                src={Facebook}
                                alt="Facebook"
                            />
                        </a>
                        <a href="#">
                            <Image
                                priority
                                src={Tiktok}
                                alt="Tiktok"
                            />
                        </a>
                        <a href="#">
                            <Image
                                priority
                                src={Instagram}
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </div>

            </div>
        </footer >
    )
}