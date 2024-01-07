import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { productsList } from "../../../lib/data"
import Product from "../../../ui/components/products/product/Product"
import './Pagination.css'


const items = productsList;

function Items({ currentItems }) {
    return (
        <div className="flex flex-wrap gap-4">
            {currentItems && currentItems.map((product) =>
                <Product key={product.id} product={product} />
            )}
        </div>
    );
}


export default function PaginatedItems({ itemsPerPage }) {
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
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % items.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                className={"main"}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                breakLabel="..."
                renderOnZeroPageCount={null}
            />
        </>
    );
}