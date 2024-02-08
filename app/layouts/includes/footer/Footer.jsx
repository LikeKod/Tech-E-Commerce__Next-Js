
import './Footer.css'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'


export default function Footer() {
    return (
        <footer className={"footer"}>
            <div className={"container"}>
                <FooterTop />
                <FooterBottom />
            </div>
        </footer >
    )
}