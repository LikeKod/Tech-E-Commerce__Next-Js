import Link from "next/link";
import React from "react";

export default function Menu({ items, active, setActive }) {
    return (
        <nav className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur" />
            <ul className={"header__nav__link"} onClick={e => e.stopPropagation()}>
                {items.map((item) =>
                    <li key={item.id}>
                        <Link key={item.id} href={item.href}>{item.value}</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}