import FooterInfoColumns from './FooterInfoColumns'
import './Footer.css'


export default function FooterTop() {
    return (
        <div className={"footer__top"}>
            <FooterInfoColumns />
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
    )
}