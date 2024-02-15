import Brand from './brand/Brand'
import Memory from './memory/Memory'
import Protection from './protection/Protection'
import ScreenDiag from './screenDiag/ScreenDiag'
import ScreenType from './screenType/ScreenType'
import Battery from './battery/Battery'
import Price from './price/Price'



export default function Filter({ items }) {
    console.log(items)
    return (
        <>
            <Price />
            {/* {items.map(item => {

            })}
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Brand</button>
                    <Image alt="Icon" className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                    <Search />
                    <Checkbox tags={'brand'} />
                </div>
            </div> */}
            <Brand item={items} />
            {/* <Memory />
            <Protection />
            <ScreenDiag />
            <ScreenType />
            <Battery /> */}
        </>
    )
}