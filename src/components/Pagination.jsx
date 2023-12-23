function Pagination(props) {
    return (
        <div>
            {[1, 2, 3, 4, 5].map(page => (
                <button
                    key={page}
                    onClick={() => props.handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
}


export default Pagination;
