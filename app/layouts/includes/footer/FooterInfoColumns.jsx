import Image from 'next/image'
import './Footer.css'

import logo from '/public/images/footer/logo-white.png'

export default function FooterInfoColumns() {

    return (
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
    )
}