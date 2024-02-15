import Brand from './brand/Brand'
import Memory from './memory/Memory'
import Protection from './protection/Protection'
import ScreenDiag from './screenDiag/ScreenDiag'
import ScreenType from './screenType/ScreenType'
import Battery from './battery/Battery'
import Price from './price/Price'



export default function Filter({items}) {
    console.log(items)
    return (
        <>
            <Price />
            <Brand item={items.categories}/>
            <Memory />
            <Protection />
            <ScreenDiag />
            <ScreenType />
            <Battery />
        </>
    )
}