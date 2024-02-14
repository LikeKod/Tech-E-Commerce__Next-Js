'use client'
import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useContext, useState } from 'react'
import Search from '../../search/Search'
import { categoryFoFilters } from '../../../../lib/data'
import { AppContext } from '../../../../context/ShopingCartContext'
import Checkbox from '../../checkbox/Checkbox'
// import Checkbox from '../../checkbox/Checkbox'

export default function Battery() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Battery</button>
                    <Image alt="Icon" className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                    <Search />
                    <Checkbox tags={'battery'} />
                    {/* <Checkbox foFilters={categoryFoFilters} cat={'battery'} /> */}
                </div>
            </div>
        </>
    )
}