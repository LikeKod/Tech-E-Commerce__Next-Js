import './sale.css'

export default function Sale() {
    return (
        <div className="pt-[160px] pb-[90px] flex flex-col w-full bg-no-repeat bg-sale-md bg-cover bg-center md:bg-sale">
            <div className={"sale__content container"}>
                <div className={"banner-title banner-title--sale"}>
                    Big Summer <span>Sale</span>
                </div>
                <div className={"banner-subtitle banner-subtitle--sale"}>
                    Commodo fames vitae vitae leo mauris in. Eu consequat.
                </div>
                <div className={"header__banner-btn"}>
                    <a className={"button btn__white-small button--sale"} href="#">
                        ShopNow
                    </a>
                </div>
            </div>
        </div>
    )
}