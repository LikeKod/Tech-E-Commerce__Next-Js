'use client'

import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { productsList } from "../../../lib/data"
import ProductsContainer from "../../../ui/components/products/ProductsContainer"
import './Pagination.css'



// function Items({ currentItems }) {
//     console.log('items', currentItems)
//     return (
//         <div className="flex justify-center flex-wrap gap-4">
//             {currentItems && currentItems.map((product) =>
//                 <ProductsContainer key={product.id} products={currentItems} />
//             )}
//         </div>
//     );
// }


export default function PaginatedItems({ itemsPerPage, items }) {
    const item = items.items
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState();
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(item.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(item.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % item.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    console.log('paginated', currentItems)
    return (
        <>
            <div className="flex justify-center flex-wrap gap-4">
                {currentItems && currentItems.map((product) =>
                    <ProductsContainer key={product.id} products={currentItems} />
                )}
            </div>
            <ReactPaginate
                className={"main"}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={10}
                marginPagesDisplayed={2}
                pageCount={itemsPerPage}
                previousLabel="<"
                breakLabel="..."
                renderOnZeroPageCount={null}
            />
        </>
    );
}