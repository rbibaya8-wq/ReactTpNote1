function Pagination({ currentPage, totalPages, onChangePage }) {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1} onClick={() => onChangePage(currentPage - 1)}>
        Prev
      </button>

      <span>{currentPage} / {totalPages}</span>

      <button disabled={currentPage === totalPages} onClick={() => onChangePage(currentPage + 1)}>
        Next
      </button>
    </div>
  );
}
export default Pagination;