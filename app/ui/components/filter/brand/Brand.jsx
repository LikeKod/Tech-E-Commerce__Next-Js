import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'

export default function Brand() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='mb-[24px]'>
                <div className={`flex justify-between filters_border`}>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Brand</button>
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
                        <input type="checkbox" className="custom-checkbox" id="name" />
                        <label htmlFor="name">Samsung
                            <p className="checkbox_number">125</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Apple" />
                        <label htmlFor="Apple">Apple
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Xiaomi" />
                        <label htmlFor="Xiaomi">Xiaomi
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Poco" />
                        <label htmlFor="Poco">Poco
                            <p className="checkbox_number">44</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="OPPO" />
                        <label htmlFor="OPPO">OPPO
                            <p className="checkbox_number">36</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Honor" />
                        <label htmlFor="Honor">Honor
                            <p className="checkbox_number">10</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Motorola" />
                        <label htmlFor="Motorola">Motorola
                            <p className="checkbox_number">34</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Nokia" />
                        <label htmlFor="Nokia">Nokia
                            <p className="checkbox_number">22</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Realme" />
                        <label htmlFor="Realme">Realme
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}