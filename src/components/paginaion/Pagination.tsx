import PNstyle from './Pagination.scss';
import React, { useState } from 'react';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    paginate(pageNumber);
  };

  return (
    <nav className={PNstyle.pagination}>
        <ul>
            {pageNumbers.map((number) => (
                <li key={number} className={currentPage === number ? 'active' : ''}>
                    <p onClick={() => handleClick(number)}>
                        sdf&#9679; {/* 점 모양 */}
                    </p>
                </li>
            ))}
        </ul>
    </nav>
  );
};

export default Pagination;
