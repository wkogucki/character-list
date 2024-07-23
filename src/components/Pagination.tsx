import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowLeftIcon } from 'assets/icons/ArrowLeftIcon.svg';
import { ReactComponent as ArrowRightIcon } from 'assets/icons/ArrowRightIcon.svg';

interface PaginationProps {
  pageCount: number;
  pageNumber: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}
const paginationArrowStyles =
  'w-[48px] h-[40px] flex items-center justify-center';

const paginationTileStyles =
  'w-[48px] h-[40px] border rounded-sm flex items-center justify-center';
export const Pagination = ({
  pageCount,
  pageNumber,
  onPageChange,
}: PaginationProps) => (
  <ReactPaginate
    aria-label="Pagination"
    previousAriaLabel="Previous"
    nextAriaLabel="Next"
    pageCount={pageCount}
    onPageChange={onPageChange}
    previousLabel={<ArrowLeftIcon aria-hidden="true" focusable="false" />}
    nextLabel={<ArrowRightIcon aria-hidden="true" focusable="false" />}
    breakLabel={'...'}
    containerClassName={'flex gap-4 justify-center mt-4'}
    className="flex py-5 justify-center my-4 gap-3"
    previousClassName={paginationArrowStyles}
    nextClassName={paginationArrowStyles}
    pageClassName={paginationTileStyles}
    disabledClassName={'opacity-30 cursor-not-allowed'}
    activeClassName={'!border-black'}
    forcePage={pageNumber - 1}
  />
);
