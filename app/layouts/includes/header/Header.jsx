'use client'

import Image from 'next/image'
import './Header.css'
import logo from "/public/images/header/LogoVector.png";
import Menu from './headerItem/Menu'
import { useState } from 'react';
import { navItem } from '../../../lib/data';
import Search from '../../../ui/components/input/Input'
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import SubNavItem from './headerItem/SubNavItem'



export default function Header({ searchValue, setSearchValue }) {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <header className={'header'}>
            <div className={'header__nav'}>
                <div className={'header__nav__container'}>
                    <div className={"logo__black"}>
                        <a href="/">
                            <Image
                                priority
                                src={logo}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                    <Menu active={menuActive} setActive={setMenuActive} items={navItem} />
                    <div className={"header__nav__icons"}>
                        <a href="/favorites">
                            <IoIosHeartEmpty size={30} />
                        </a>
                        <a href="/orders">
                            <IoCartOutline size={30} />
                        </a>
                        <a href="/orders">
                            <LuUser size={30} />
                        </a>
                    </div>
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