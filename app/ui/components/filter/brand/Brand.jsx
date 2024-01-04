import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'

export default function Brand() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-8'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl '>Brand</button>
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
                        <label for="name">Samsung
                            <p className="checkbox_number">125</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Apple" />
                        <label for="Apple">Apple
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Xiaomi" />
                        <label for="Xiaomi">Xiaomi
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Poco" />
                        <label for="Poco">Poco
                            <p className="checkbox_number">44</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="OPPO" />
                        <label for="OPPO">OPPO
                            <p className="checkbox_number">36</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Honor" />
                        <label for="Honor">Honor
                            <p className="checkbox_number">10</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Motorola" />
                        <label for="Motorola">Motorola
                            <p className="checkbox_number">34</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Nokia" />
                        <label for="Nokia">Nokia
                            <p className="checkbox_number">22</p>
                        </label>
                    </div>
                    <div className="Checkbox_text mb-[8px]">
                        <input type="checkbox" className="custom-checkbox" id="Realme" />
                        <label for="Realme">Realme
                            <p className="checkbox_number">110</p>
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}