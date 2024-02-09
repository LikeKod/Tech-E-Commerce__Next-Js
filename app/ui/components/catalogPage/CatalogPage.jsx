'use client'

import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../../lib/data";
import PaginatedItems from '../pagination/Pagination'
import Filter from '../filter/Filter'
import ArrowLeft from '../../../../public/images/Icons/Arrow_left-32.svg'
import Image from 'next/image'
import FiltersMenu from './FiltersMenu'
import { AppContext } from "../../../context/ShopingCartContext";


export default  function CatalogPage() {
    // const { data } = await getProducts(params);
    const [isOpen, setIsOpen] = useState(false)
    
    const { products, setProducts, filteredData, maxPrice } = useContext(AppContext);

    const params = {max_price: maxPrice}
      
    console.log('CatalogPage', filteredData)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getProducts(params);
                data ? setProducts(data?.products) : setProducts([]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    console.log(products)

    return (
        <div className="flex justify-center sm:justify-between">
            <div className={`${isOpen ? "block" : "hidden"} min-w-[256px] pt-[3.5rem] mr-[28px] sm:block`}>
                <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex text-2xl mb-[24px] sm:hidden">
                    <Image className="mr-[16px]" src={ArrowLeft} />
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