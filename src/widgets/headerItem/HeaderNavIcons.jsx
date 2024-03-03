import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import PopapUi from "../AuthPopup/AuthPopup"
import '../header/Header.css'
import {store} from "../../shared/redux/store";
import {Provider } from 'react-redux'

export default function HeaderNavIcons() {
    return (
        <Provider store={store}>
            <div className={"header__nav__icons"}>
                <a href="/favorites">
                    <IoIosHeartEmpty size={30} />
                </a>
                <a href="/cart">
                    <IoCartOutline size={30} />
                </a>
                <PopapUi/>
            </div>
        </Provider>
    )
}