import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'

export default function Memory() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='mb-[24px]'>
            <div className={`flex justify-between filters_border`}>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Built-in memory</button>
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
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="32GB" />
                        <label for="32GB">32GB
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="64GB" />
                        <label for="64GB">64GB
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="128GB" />
                        <label for="128GB">128GB
                            <p className="checkbox_number">44</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="256GB" />
                        <label for="256GB">256GB
                            <p className="checkbox_number">36</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="512GB" />
                        <label for="512GB">512GB
                            <p className="checkbox_number">10</p>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}