import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'
import Search from '../../search/Search'
import { categoryFoFilters } from '../../../../lib/data'

export default function Protection() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Protection class</button>
                    <Image className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                <Search />
                    {categoryFoFilters.map((category) =>
                    category.protection ?
                        <div key={category.id} className="Checkbox mb-[8px]">
                            <input type="checkbox" className="custom-checkbox" id={category?.protection} />
                            <label for={category?.protection}>{category?.protection}
                                <p className="checkbox_number">125</p>
                            </label>
                        </div>
                        : null
                    )}
                </div>
            </div>
        </>
    )
}