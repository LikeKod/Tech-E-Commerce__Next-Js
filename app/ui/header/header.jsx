import Image from 'next/image'
import header from './header.module.css'
import Gaming_24 from "/public/images/header/Gaming-24.svg";
import Headphones from "/public/images/header/Headphones-24.svg";
import Phones from "/public/images/header/Phones-24.svg";
import Cameras from "/public/images/header/Cameras-24.svg";
import Computers from "/public/images/header/Computers-24.svg";
import User_svg from "/public/images/header/User-32.svg";
import Favorites_svg from "/public/images/header/Favorites-32.svg";
import Cart_svg from "/public/images/header/Cart-32.svg";
import logo from "/public/images/header/LogoVector.png";

export default function Header() {
    return (
        <header className={header.header}>
            <div className={header.header__top}>
                <div className={`${header.header__top__container} ${header.container}`}>
                    <div className={header.logo__black}>
                        <a href="">
                            <Image
                                priority
                                src={logo}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <label for="" className={`${header.search} ${header.header__search}`}>
                        <span></span>
                        <input type="search" placeholder="Search" name="name" />
                    </label>
                    <nav className={header.menu}>
                        <ul className={header.header__nav__link}>
                            <li><a className={header.menu__link} href="#">Home</a></li>
                            <li><a className={header.menu__link} href="#">About</a></li>
                            <li><a className={header.menu__link} href="#">Contuct Us</a></li>
                            <li><a className={header.menu__link} href="#">Blog</a></li>
                        </ul>
                    </nav>
                    <div className={header.header__top__icons}>
                        <a href="#">
                        <Image
                                priority
                                src={Favorites_svg}
                                alt="Logo"
                            />
                        </a>
                        <a href="#">
                        <Image
                                priority
                                src={Cart_svg}
                                alt="Logo"
                            />
                        </a>
                        <a href="#">
                        <Image
                                priority
                                src={User_svg}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <button className="header__burger-btn" id="burger">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
            <div className="header__subnav">
                <div className="container container__subnav">
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src={Phones}
                            alt="Phones"
                        />
                        <p>Phones</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src={Computers}
                            alt="Computers"
                        />
                        <p>Computers</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src={Gaming_24}
                            alt="Gaming"
                        />
                        <p>Smart Watches</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src={Cameras}
                            alt="Cameras"
                        />
                        <p>Cameras</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src={Headphones}
                            alt="Headphones"
                        />
                        <p>Headphones</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src={Gaming_24}
                            alt="Gaming"
                        />
                        <p>Gaming</p>
                    </div>
                </div>
            </div>
        </header>
    )
}