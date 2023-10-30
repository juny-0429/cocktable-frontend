import React, { useState, useEffect } from 'react';
import ctStyle from './Cocktail.module.scss';
import Pagination from '../../components/paginaion/Pagination'; // 페이지네이션 컴포넌트 임포트
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import CocktailData from '../../test-data/Cocktail.json';

function Cocktail() {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = CocktailData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className={ctStyle.cocktailMain}>
        <div className={ctStyle.cocktailItemList}>
          {currentItems.map((item, index) => (
            <div key={index} className={ctStyle.cocktailItem}>
              <img src={item.src} alt={item.name} />
              <p>{item.name}</p>
              <p className={ctStyle.cocktailPrice}>{item.price}</p>
            </div>
          ))}
        </div>

        <Pagination
          totalItems={CocktailData.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>

      <CartBtn />
      <OrderBtn />
    </div>
  );
}

export default Cocktail;