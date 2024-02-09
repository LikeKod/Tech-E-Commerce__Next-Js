'use client'
import PaginatedItems from '../pagination/Pagination'
import Filter from '../filter/Filter'
import ArrowLeft from '../../../../public/images/Icons/Arrow_left-32.svg'
import { useState } from 'react'
import Image from 'next/image'
import FiltersMenu from './FiltersMenu'

export default function CatalogPage(items) {
    const [isOpen, setIsOpen] = useState(false)
    console.log('data:',items.items)

    return (
        <div className="flex justify-center sm:justify-between">
            <div className={`${isOpen ? "block" : "hidden"} min-w-[256px] pt-[3.5rem] mr-[28px] sm:block`}>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex text-2xl mb-[24px] sm:hidden">
                    <Image className="mr-[16px]" src={ArrowLeft} />
                    Filters
                </div>
                <Filter items={items.items}/>
            </div>

            <div className={`${isOpen ? 'hidden' : ''}`}>
                <FiltersMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                <PaginatedItems
                    open={isOpen}
                    items={items}
                    itemsPerPage={5} />
            </div>
        </div>
    )
}