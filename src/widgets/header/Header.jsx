'use client'

import Image from 'next/image'
import './Header.css'
import logo from "/public/images/header/LogoVector.png";
import Menu from '../headerItem/Menu'
import { useState } from 'react';

import { navItem } from '../../shared/lib/utils/data';
import Search from '../input/Input'
import HeaderNavIcons from '../headerItem/HeaderNavIcons'
import SubNavItem from '../headerItem/SubNavItem'
import Link from 'next/link';

export default function Header({ }) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <header className={'header'}>
            <div className={'header__nav'}>
                <div className={'header__nav__container relative'}>
                    <div className={"logo__black"}>
                        <Link href="/">
                            <Image
                                priority
                                src={logo}
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <Search />
                    <Menu active={menuActive} setActive={setMenuActive} items={navItem} />
                    <HeaderNavIcons />
                    <button onClick={() => setMenuActive(!menuActive)} className={"header__burger-btn"} id="burger">
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </div>

            <div className="header__subnav">
                <div className={"container container__subnav"}>
                    <SubNavItem />
                </div>
            </div>
        </header>
    )
}