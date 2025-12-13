export default function Pagination({ currentPage, totalPages, onPageChange }) {

    // const [currentPage, setCurrentPage] = useState(1)
    // const [totalPages, setTotalPages] = useState(0)
    // console.log('currentPage:', currentPage)
    // console.log('totalPages: ', totalPages)
    return <div className="pagination">
        < button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
        > Previous</button >
        <span className="page-number">Page {currentPage} of {totalPages}</span>
        <button
            disabled={currentPage === totalPages}  // Disable on last page
            onClick={() => onPageChange(currentPage + 1)}  // ← Call the function!
        >
            Next
        </button>
    </div>
}