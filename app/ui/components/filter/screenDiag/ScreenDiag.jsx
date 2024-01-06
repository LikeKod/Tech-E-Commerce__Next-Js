import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'

export default function ScreenDiagl() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Screen diagonal</button>
                    <Image className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                    <label htmlFor="">
                        <span></span>
                        <input
                            className='w-[230px] h-[40px] rounded-lg bg-neutral-100 px-12 box-border mb-[16px] mt-[24px]'
                            type="search"
                            placeholder="Search"
                            name="name" />
                    </label>
                    <div className="Checkbox mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="16GB" />
                        <label for="16GB">16GB
                            <p className="checkbox_number">125</p>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}