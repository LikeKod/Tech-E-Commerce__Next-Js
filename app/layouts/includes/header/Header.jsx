'use client'

import Image from 'next/image'
import './Header.css'
import Gaming_24 from "/public/images/header/Gaming-24.svg";
import Headphones from "/public/images/header/Headphones-24.svg";
import Phones from "/public/images/header/Phones-24.svg";
import Cameras from "/public/images/header/Cameras-24.svg";
import Computers from "/public/images/header/Computers-24.svg";
import User_svg from "/public/images/header/User-32.svg";
import Favorites_svg from "/public/images/header/Favorites-32.svg";
import Cart_svg from "/public/images/header/Cart-32.svg";
import logo from "/public/images/header/LogoVector.png";
import Menu from "./Menu"
import { useState } from 'react';
import { navItem } from '../../../lib/data';
import Search from '../../../ui/components/input/Input'



export default function Header({searchValue, setSearchValue}) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <header className={'header'}>
            <div className={'header__nav'}>
                <div className={'header__nav__container'}>
                    <div className={"logo__black"}>
                        <a href="">
                            <Image
                                priority
                                src={logo}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
                    <Menu active={menuActive} setActive = {setMenuActive} items={navItem} />
                    <div className={"header__nav__icons"}>
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
                    <button onClick={() => setMenuActive(!menuActive)} className={"header__burger-btn"} id="burger">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>
            <div className="header__subnav">
                <div className={"container"}>
                    <div className={"container container__subnav"}>
                        <div className={"header__subnav-item"}>
                            <Image
                                priority
                                src={Phones}
                                alt="Phones"
                            />
                            <p>Phones</p>
                        </div>
                        <div className={"header__subnav-item"}>
                            <Image
                                priority
                                src={Computers}
                                alt="Computers"
                            />
                            <p>Computers</p>
                        </div>
                        <div className={"header__subnav-item"}>
                            <Image
                                priority
                                src={Gaming_24}
                                alt="Gaming"
                            />
                            <p>Smart Watches</p>
                        </div>
                        <div className={"header__subnav-item"}>
                            <Image
                                priority
                                src={Cameras}
                                alt="Cameras"
                            />
                            <p>Cameras</p>
                        </div>
                        <div className={"header__subnav-item"}>
                            <Image
                                priority
                                src={Headphones}
                                alt="Headphones"
                            />
                            <p>Headphones</p>
                        </div>
                        <div className={"header__subnav-item"}>
                            <Image
                                priority
                                src={Gaming_24}
                                alt="Gaming"
                            />
                            <p>Gaming</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}