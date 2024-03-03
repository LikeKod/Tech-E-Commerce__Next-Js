'use client'

import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import ProductCart from '../products/ProductCart';
import './Pagination.css'


export default function PaginatedItems({ itemsPerPage, items, open }) {
    const [sortIndex, setSortIndex] = useState(0);

    const [item, setItem] = useState(items)
    const [sortedItems, setSortedItems] = useState(items)
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const sortOptions = [
        { key: 'id', type: 'number' },
        { key: 'name', type: 'string' },
        { key: 'price', type: 'number' },
    ];
    const sortFunctions = {
        number: (a, b) => a - b,
        string: (a, b) => a.localeCompare(b),
    };


    useEffect(() => {
        if (item) {
            const { key, type } = sortOptions[sortIndex];
            const f = sortFunctions[type];
            setSortedItems([...item].sort((a, b) => f(a[key], b[key])))
        };
    }, [item, sortIndex]);




    const onSortChange = e => {
        setSortIndex(+e.target.value)
    }


    useEffect(() => {
        // Fetch items from another resources.
        if (sortedItems !== undefined) {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(sortedItems.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(sortedItems.length / itemsPerPage));
        }

    }, [itemOffset, itemsPerPage, sortedItems]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % sortedItems.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    return (
        <div>
            <div className='flex mb-5 justify-center items-center sm:justify-between'>
                <div className="text-neutral-400 mt-[24px] hidden text-sm sm:block">Selected Products: <span className="text-black text-xl">{items.length}</span></div>
                <div className={`${open ? "hidden" : "block"} text-center sm:block sm:text-right`}>
                    <select className="w-[164px] h-[56px] rounded-lg px-[16px] bg-white border text-base sm:w-[256px] sm:h-[40px]" value={sortIndex} onChange={onSortChange}>
                        {sortOptions.map((n, i) => <option key={n.key} value={i}>{n.key}</option>)}
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap mb-8 justify-center gap-4">
                <div className="flex justify-center flex-wrap gap-4">
                    {currentItems && currentItems.map((product) =>
                        <ProductCart key={product.id} product={product} />
                    )}
                </div>
            </div>
            <ReactPaginate
                className={"main"}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="<"
                breakLabel="..."
                renderOnZeroPageCount={null}
            />
        </div>
    );
}