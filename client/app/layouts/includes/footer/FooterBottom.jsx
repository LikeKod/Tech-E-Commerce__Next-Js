import Facebook from "/public/images/footer/Facebook-16.svg";
import Twitter from "/public/images/footer/Twitter-16.svg";
import Tiktok from "/public/images/footer/Tiktok-16.svg";
import Instagram from "/public/images/footer/Twitter-16.svg";
import Image from 'next/image'

import './Footer.css'


export default function FooterBottom() {
    return (
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
    )
}