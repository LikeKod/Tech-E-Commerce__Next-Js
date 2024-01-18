'use client'

import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'
import defis from '../../../../../public/images/filters/defis.svg'
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Price() {
    const [leftValue, setLeftValue] = useState(1000)
    const [rightValue, setRightValue] = useState(7000)
    const [isOpen, setIsOpen] = useState(false)

    const LeftOnChangeEventTriggerd = (newValue) => {
        console.log("new Value", newValue[1]);
        setLeftValue(newValue[1]);
      };

      const RightOnChangeEventTriggerd = (newValue) => {
        console.log("new Value", newValue[1]);
        setRightValue(newValue[1]);
      };
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
                            <input className={`price_border w-[107px] h-[40px] rounded pl-[8px]`} type="text"  value={leftValue} />
                            <Image src={defis} />
                            <input className={`price_border w-[107px] h-[40px] rounded pl-[8px]`} type="text" value={rightValue} />
                        </div>
                        <label></label>
                        <Slider
                            min={0} max={1000000} defaultValue= {[leftValue, rightValue]} 
                            step={1000}
                            onChange={RightOnChangeEventTriggerd}
                            value={[leftValue, rightValue]}
                            range />
                    </div>
                </div>
            </div>
        </>
    )
}