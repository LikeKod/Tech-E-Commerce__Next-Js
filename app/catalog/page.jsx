'use client'

import MainLayout from "../layouts/MainLayout"
import PaginatedItems from "../ui/components/pagination/Pagination"
import Filter from '../ui/components/filter/Filter'
import Arrow from '../../public/images/Icons/Arrow-24.svg'
import ArrowLeft from '../../public/images/Icons/Arrow_left-32.svg'
import Image from "next/image"
import { useState } from "react"
import Filters from '../../public/images/Icons/Filters-24.svg'
import { productsList } from "../lib/data"
import  Select  from "../ui/components/select/Select"
import SortedProduct from '../ui/components/sortedProduct/SortedProduct'

export default function Catalog({ }) {
    const [isOpen, setIsOpen] = useState(false)

    const SORT_OPTIONS = [
        { key: 'id', type: 'number' },
        { key: 'name', type: 'string' },
        { key: 'price', type: 'number' },
    ];

    const SORT_FUNCTIONS = {
        number: (a, b) => a - b,
        string: (a, b) => a.localeCompare(b),
    };
    return (
        <MainLayout>

            <div className="container">
                <div className="hidden mt-[44px] text-neutral-400 gap-[16px] sm:flex">
                    <p>Home</p>
                    <Image src={Arrow} />
                    <p>Catalog</p>
                    <Image src={Arrow} />
                    <p className="text-black">Smartphones</p>
                </div>

                <div className="flex justify-center sm:justify-between">
                    <div className={`${isOpen ? "block" : "hidden"} min-w-[256px] pt-[3.5rem] mr-[28px] sm:block`}>
                        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex text-2xl mb-[24px] sm:hidden">
                            <Image className="mr-[16px]" src={ArrowLeft} />
                            Filters
                        </div>
                        <Filter />
                    </div>

                    <div className={`${isOpen ? 'hidden' : ''}`}>
                        <div className="block justify-between my-[24px] sm:flex">
                            <div className="text-neutral-400 text-sm hidden sm:block">Selected Products: <span className="text-black text-xl">85</span></div>
                            <div>
                                <div className='flex justify-around'>
                                    <button onClick={() => setIsOpen(!isOpen)} className='flex px-[16px] w-[164px] h-[56px] items-center justify-between rounded-lg bg-white border text-base sm:hidden'>
                                        Filters
                                        <Image src={Filters} />
                                    </button>
                                    {/* <select className="w-[164px] h-[56px] rounded-lg px-[16px] bg-white border text-base sm:w-[256px] sm:h-[40px]" name="filter" id="">
                                        <option value="rating">By rating</option>
                                        <option value="price">By price</option>
                                        <option value="novelty">By novelty</option>
                                    </select> */}
                                    <Select items={productsList}
                                        sortOptions={SORT_OPTIONS}
                                        sortFunctions={SORT_FUNCTIONS}
                                        itemsPerPage={4} />
                                </div>
                            </div>
                            <div className="text-neutral-400 mt-[24px] text-sm sm:hidden">Selected Products: <span className="text-black text-xl">85</span></div>
                        </div>
                        <div>

                            {/* <PaginatedItems itemsPerPage={4} /> */}
                        </div>
                    </div>

                </div>

            </div>

        </MainLayout>
    )
}