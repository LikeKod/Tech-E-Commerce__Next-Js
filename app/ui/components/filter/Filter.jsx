import Brand from './brand/Brand'
import Memory from './memory/Memory'
import Protection from './protection/Protection'
import ScreenDiag from './screenDiag/ScreenDiag'
import ScreenType from './screenType/ScreenType'
import Battery from './battery/Battery'



export default function Filter() {
    return (
        <>
            <Brand />
            <Memory />
            <Protection />
            <ScreenDiag />
            <ScreenType />
            <Battery />
        </>
    )
}