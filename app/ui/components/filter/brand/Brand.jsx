'use client'

import '../Filter.css'
import Image from 'next/image'
import arrow from '../../../../../public/images/Icons/Arrow_Down-24.svg'
import { useContext, useState } from 'react'
import Search from '../../search/Search'
import { categoryFoFilters } from '../../../../lib/data'
import { AppContext } from '../../../../context/ShopingCartContext'

export default function Brand() {
    const [isOpen, setIsOpen] = useState(false)
    const { setFilteredData, filteredData } = useContext(AppContext)
    const FilterChange = (event) => {
        console.log("event", event.target.value);
        setFilteredData( {filters: `${event.target.value}`})
        console.log("filteredData", filteredData);
    };
    return (
        <>
            <div className='mb-[24px]'>
                <div className='flex justify-between border-b-2 pb-[12px]'>
                    <button onClick={() => setIsOpen(!isOpen)} className='font-medium text-xl'>Brand</button>
                    <Image alt="Icon" className={`${isOpen ? "arrow_open" : "arrow"}`} src={arrow} />
                </div>
                <div className={`container_checkboxes ${isOpen ? "active" : ""}`}>
                    <Search />
                    {categoryFoFilters.map((category) =>
                    category.brand ?
                        <div key={category.id} className="Checkbox mb-[8px]">
                            <input type="checkbox" value={category?.brand} onChange={FilterChange} className="custom-checkbox" id={category?.brand} />
                            <label htmlFor={category?.brand}>{category?.brand}
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