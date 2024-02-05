'use client'

import Image from 'next/image'
import './Header.css'
import logo from "/public/images/header/LogoVector.png";
import Menu from './headerItem/Menu'
import { useContext, useState } from 'react';
import debounce from "debounce"

import { navItem } from '../../../lib/data';
import Search from '../../../ui/components/input/Input'
import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import SubNavItem from './headerItem/SubNavItem'
import { GET_PRODUCTS_ENDPOINT } from '../../../lib/constants/endpoints';
import { BiLoaderCircle } from 'react-icons/bi'
import Link from 'next/link';
import { AppContext } from '../../../context/ShopingCartContext';





export default function Header({ }) {
    const [menuActive, setMenuActive] = useState(false)
    const [items, setItems] = useState([])
    const [isSearching, setIsSearching] = useState(null)
    const { searchText, setSearchText } = useContext(AppContext)

    const handleSearchName = debounce(async (event) => {
        if (event.target.value == '') {
            setItems([])
            return
        }

        setIsSearching(true)

        try {
            const response = await fetch(GET_PRODUCTS_ENDPOINT, {
                search: 'Hoodie',
                method: "GET",
            })
            const result = await response.json()

            if (result) {
                let res = []
                result.products.map(product => product.name.includes(event.target.value) ? res.push(product):null)
                setItems(res)
                setIsSearching(false)
                console.log(result)

                return
            }
            setItems([])
            setIsSearching(false)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }, 500)

    return (
        <header className={'header'}>
            <div className={'header__nav'}>
                <div className={'header__nav__container relative'}>
                    <div className={"logo__black"}>
                        <a href="/">
                            <Image
                                priority
                                src={logo}
                                alt="Logo"
                            />
                        </a>
                    </div>
                    <Search onChange={handleSearchName} />
                    {isSearching ? <BiLoaderCircle className="mr-2 animate-spin" size={22} /> : null}

                    {items.length > 0 ?
                        <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                            {items.map((item) => (
                                <div className="p-1" key={item.id}>
                                    <Link
                                        href={`/product/${item?.id}`}
                                        className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2"
                                    >
                                        <div className="flex items-center">
                                            <img className="rounded-md" width="40" src={item?.images[0].src} />
                                            <div className="truncate ml-2">{item?.name}</div>
                                        </div>
                                        <div className="truncate">£{(item?.price / 100).toFixed(2)}</div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        : null}
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