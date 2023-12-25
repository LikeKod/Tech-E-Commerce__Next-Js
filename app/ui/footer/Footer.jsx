import Image from 'next/image'
import Facebook from "/public/images/footer/Facebook-16.svg";
import Twitter from "/public/images/footer/Twitter-16.svg";
import Tiktok from "/public/images/footer/Tiktok-16.svg";
import Instagram from "/public/images/footer/Twitter-16.svg";
import logo from '/public/images/footer/logo-white.png'
import footer from './Footer.css'

export default function Footer() {
    return (
        <footer class="footer">
            <div class="container">
                <div class="footer__top">
                    <div class="footer__info-column">
                        <div class="footer__logo logo__white">
                            <a href="">
                                <Image
                                    priority
                                    src={logo}
                                    alt="Logo"
                                />
                            </a>
                        </div>
                        <div class="footer__info-meesage">
                            We are a residential interior design firm located in
                            Portland. Our boutique-studio offers more than
                        </div>
                    </div>
                    <div class="footer__columns">
                        <div class="footer__column">
                            <div class="footer__column-title">Services</div>
                            <ul class="footer__column">
                                <li class="footer__column-item">
                                    Bonus program
                                </li>
                                <li class="footer__column-item">Gift cards</li>
                                <li class="footer__column-item">
                                    Credit and payment
                                </li>
                                <li class="footer__column-item">
                                    Service contracts
                                </li>
                                <li class="footer__column-item">
                                    Non-cash account
                                </li>
                                <li class="footer__column-item">Payment</li>
                            </ul>
                        </div>
                        <div class="footer__column">
                            <div class="footer__column-title">Services</div>
                            <ul class="footer__column">
                                <li class="footer__column-item">
                                    Find an order
                                </li>
                                <li class="footer__column-item">
                                    Terms of delivery
                                </li>
                                <li class="footer__column-item">
                                    Exchange and return of goods
                                </li>
                                <li class="footer__column-item">Guarantee</li>
                                <li class="footer__column-item">
                                    Frequently asked questions
                                </li>
                                <li class="footer__column-item">
                                    Terms of use of the site
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="footer__bottom">
                    <div class="social-list social-list--footer">
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