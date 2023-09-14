import React from 'react';
import PNstyle from './Pagination.module.scss';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className={PNstyle.pagination}>
      <ul className={PNstyle.paginationList}>
        {pageNumbers.map((pageNumber) => (
          <li
            key={pageNumber}
            className={`${PNstyle.paginationItem} ${currentPage === pageNumber ? PNstyle.active : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {/* 페이지 번호 대신 점(●) 모양으로 표시 */}
            <span className={PNstyle.paginationLink}>●</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
