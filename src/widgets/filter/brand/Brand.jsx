'use client'

import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../public/images/Icons/Arrow_Down-24.svg'
import { useContext, useState } from 'react'
import Search from '../../search/Search'
import { categoryFoFilters } from '../../../shared/lib/utils/data'
import Checkbox from "../../checkbox/Checkbox";

export default function Brand({items}) {
    const [isOpen, setIsOpen] = useState(false)
    // const { setFilteredData, filteredData } = useContext(AppContext)
    // const FilterChange = (event) => {
    //     console.log("event", event.target.value);
    //     setFilteredData( {filters: `${event.target.value}`})
    //     console.log("filteredData", filteredData);
    // };
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
                    {items.map((item) =>
                        <Checkbox key={item.id} item={item} />
                    )}
                </div>
            </div>
        </>
    )
}