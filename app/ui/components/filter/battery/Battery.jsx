'use client'

import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useState } from 'react'
import Search from '../../search/Search'
import Checkbox from '../../checkbox/Checkbox'

export default function Battery(item) {
    const [isOpen, setIsOpen] = useState(false)

    console.log(item.item[0].categories[0])
    const items = item.item
    console.log(items)
    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Brand</button>
                    <Image alt="Icon" className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                    <Search />
                    {items.map((ob) => 
                        <Checkbox tryq={ob.categories[0]} />
                    )}
                </div>
            </div>
        </>
    )
}