import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'
import defis from '../../../../../public/images/filters/defis.svg'

export default function Price() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Price</button>
                    <Image className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                    <div>
                        <div className='flex justify-between mt-[24px]'>
                            <p className='text-sm text-zinc-400'>From</p>
                            <p className='text-sm text-zinc-400'>To</p>
                        </div>
                        <div className='flex justify-between mt-[8px] mb-[16px]'>
                            <input className={`price_border w-[107px] h-[40px] rounded pl-[8px]`} type="text" />
                            <Image src={defis} />
                            <input className={`price_border w-[107px] h-[40px] rounded pl-[8px]`} type="text" />
                        </div>
                        <label></label>
                        <input type='range' min={5000} max={100000} step={1} value={0} />
                    </div>
                </div>
            </div>
        </>
    )
}