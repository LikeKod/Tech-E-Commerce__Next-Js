import ReactPaginate from 'react-paginate';
import './Pagination.css'


export default function Pagination() {
    return (
        <ReactPaginate
            className={"main"}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={event => console.log(event)}
            pageRangeDisplayed={5}
            pageCount={3}
            renderOnZeroPageCount={null}
        />
    )
}