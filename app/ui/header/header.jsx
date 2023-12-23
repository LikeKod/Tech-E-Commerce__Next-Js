import Image from 'next/image'
import { FormEvent } from 'react'
import header from './header.scss'

export default function Header() {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container header__top__container">
                    <div className="logo__black">
                        <a href="">
                            <Image
                                priority
                                src="./public/images/header/Headphones-24.svg"
                                width={24}
                                height={24}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <label for="" className="search header__search">
                        <span></span>
                        <input type="search" placeholder="Search" name="name" />
                    </label>
                    <nav className="menu">
                        <ul className="header__top__link">
                            <li><a className="menu__link" href="#">Home</a></li>
                            <li><a className="menu__link" href="#">About</a></li>
                            <li><a className="menu__link" href="#">Contuct Us</a></li>
                            <li><a className="menu__link" href="#">Blog</a></li>
                        </ul>
                    </nav>
                    <div className="header__top__icons">
                        <a href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                                    stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 5H7L10 22H26M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97372 27.8239 6.90679 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66662 27.39 6.66667H8M12 26C12 26.5523 11.5523 27 11 27C10.4477 27 10 26.5523 10 26C10 25.4477 10.4477 25 11 25C11.5523 25 12 25.4477 12 26ZM26 26C26 26.5523 25.5523 27 25 27C24.4477 27 24 26.5523 24 26C24 25.4477 24.4477 25 25 25C25.5523 25 26 25.4477 26 26Z"
                                    stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z"
                                    stroke="#191919" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
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
                            src="./public/images/header/Phones-24.svg"
                            width={24}
                            height={24}
                            alt="Phones"
                        />
                        <p>Phones</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src="./public/images/header/Computers-24.svg"
                            width={24}
                            height={24}
                            alt="Computers"
                        />
                        <p>Computers</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src="./public/images/header/Gaming-24.svg"
                            width={24}
                            height={24}
                            alt="Gaming"
                        />
                        <p>Smart Watches</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src="./public/images/header/Cameras-24.svg"
                            width={24}
                            height={24}
                            alt="Cameras"
                        />
                        <p>Cameras</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src="./public/images/header/Headphones-24.svg"
                            width={24}
                            height={24}
                            alt="Headphones"
                        />
                        <p>Headphones</p>
                    </div>
                    <div className="header__subnav-item">
                        <Image
                            priority
                            src="./public/images/header/Gaming-24.svg"
                            width={24}
                            height={24}
                            alt="Gaming"
                        />
                        <p>Gaming</p>
                    </div>
                </div>
            </div>
        </header>
    )
}