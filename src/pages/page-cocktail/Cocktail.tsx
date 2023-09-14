import ctStyle from './Cocktail.module.scss';
import React, { useState } from 'react';
import Pagination from '../../components/paginaion/Pagination';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import CocktailData from '../../test-data/Cocktail.json';

function Cocktail() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(3); // 페이지당 보여줄 아이템 수
  
    // 현재 페이지의 아이템 범위 계산
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = CocktailData.slice(indexOfFirstItem, indexOfLastItem);
  
    // 페이지 변경 시 실행되는 함수
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
    return (
      <div className="container">
        <div className={ctStyle.cocktailMain}>
          {currentItems.map((item, index) => (
            <div key={index} className={ctStyle.cocktailItem}>
              <img src={item.src} alt={item.name} />
              <p>{item.name}</p>
              <p className={ctStyle.cocktailPrice}>{item.price}</p>
            </div>
          ))}
        </div>
  
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={CocktailData.length}
          paginate={paginate}
        />
  
        <OrderBtn />
        <CartBtn />
      </div>
    );
  }
  
  export default Cocktail;