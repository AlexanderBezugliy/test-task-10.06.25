

type PaginationProps = {
    totalPages: number;
    page: number;
    setPage: (value: number) => void;
}
const Pagination = ({ totalPages, page, setPage }: PaginationProps) => {
    return (
        <div className="flex justify-center mt-8 space-x-3">
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`w-4 h-4 rounded-full ${ page === i ? "bg-gray-dot-active" : "bg-gray-dot hover:bg-gray-400" }`}
                />
            ))}
        </div>
    )
}

export default Pagination