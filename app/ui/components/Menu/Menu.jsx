import React from "react";
import './Menu.css'

export default function Menu({ items, active, setActive }) {
    return (
        <nav className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur" />
            <ul className={"header__nav__link"} onClick={e => e.stopPropagation()}>
                {items.map((item) =>
                    <li key={item.id}>
                        <a key={item.id} href={item.href}>{item.value}</a>
                    </li>
                )}
            </ul>
        </nav>
    )
}