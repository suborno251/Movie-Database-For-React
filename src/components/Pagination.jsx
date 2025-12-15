export default function Pagination({ currentPage, totalPages, onPageChange }) {

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