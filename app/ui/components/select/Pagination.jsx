'use client'
import { useState, useMemo, useEffect } from "react";
// import './Pagination.css'
import ReactPaginate from 'react-paginate';
import ProductsContainer from "../../../ui/components/products/ProductsContainer"


function Items({ currentItems }) {
  return (
      <div className="flex justify-center flex-wrap gap-4">
          {currentItems && currentItems.map((product) =>
              <ProductsContainer key={product.id} products={product} />
          )}
      </div>
  );
}

export default  function Select({ items, sortOptions, sortFunctions, itemsPerPage }) {
  const item = items.items
    const [ sortIndex, setSortIndex ] = useState(0);

    const sortedItems = useMemo(() => {
      const { key, type } = sortOptions[sortIndex];
      const f = sortFunctions[type];
      return [...item].sort((a, b) => f(a[key], b[key]));
    }, [ item, sortIndex, sortFunctions ]);
  
    const onSortChange = e => setSortIndex(+e.target.value);

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
        setCurrentItems(sortedItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(sortedItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = event.selected * itemsPerPage % sortedItems.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };
    console.log('paginated', currentItems)
  
    return (
      <div>
        <div>
          sort by:
          <select className="w-[164px] h-[56px] rounded-lg px-[16px] bg-white border text-base sm:w-[256px] sm:h-[40px]" value={sortIndex} onChange={onSortChange}>
            {sortOptions.map((n, i) => <option value={i}>{n.key}</option>)}
          </select>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
                {currentItems && currentItems.map((product) =>
                    <ProductsContainer key={product.id} products={currentItems} />
                )}
            </div>
            <ReactPaginate
                className={"main"}
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={itemsPerPage}
                previousLabel="<"
                breakLabel="..."
                renderOnZeroPageCount={null}
            />
      </div>
    );
  }