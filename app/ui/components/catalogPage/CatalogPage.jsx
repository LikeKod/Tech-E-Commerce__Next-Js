'use client'

import { useState } from "react";
import PaginatedItems from '../pagination/Pagination'
import Filter from '../filter/Filter'
import ArrowLeft from '../../../../public/images/Icons/Arrow_left-32.svg'
import Image from 'next/image'
import FiltersMenu from './FiltersMenu'

export default function CatalogPage({products}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex justify-center sm:justify-between">
            <div className={`${isOpen ? "block" : "hidden"} min-w-[256px] pt-[3.5rem] mr-[28px] sm:block`}>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex text-2xl mb-[24px] sm:hidden">
                    <Image alt="Icon" className="mr-[16px]" src={ArrowLeft} />
                    Filters
                </div>
                <Filter items={products} />
            </div>

            <div className={`${isOpen ? 'hidden' : ''}`}>
                <FiltersMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                <PaginatedItems
                    open={isOpen}
                    items={products}
                    itemsPerPage={5} />
            </div>
        </div>
    )
}