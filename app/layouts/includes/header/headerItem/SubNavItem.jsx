import './../Header.css'
import Gaming_24 from "/public/images/header/Gaming-24.svg";
import Headphones from "/public/images/header/Headphones-24.svg";
import Phones from "/public/images/header/Phones-24.svg";
import Cameras from "/public/images/header/Cameras-24.svg";
import Computers from "/public/images/header/Computers-24.svg";
import Image from 'next/image';

export default function SubNavItem() {

    return (
        <>
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
        </>
    )
}