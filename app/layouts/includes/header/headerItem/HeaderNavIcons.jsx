import { IoCartOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { IoIosHeartEmpty } from "react-icons/io";
import PopapUi from "../../../../ui/popup/PopupUi"
import '../Header.css'

export default function HeaderNavIcons() {
    return (
        <>
            <div className={"header__nav__icons"}>
                <a href="/favorites">
                    <IoIosHeartEmpty size={30} />
                </a>
                <a href="/orders">
                    <IoCartOutline size={30} />
                </a>
                <PopapUi/>
                {/* <a href="/auth">
                    <LuUser size={30} />
                </a> */}
            </div>
        </>
    )
}