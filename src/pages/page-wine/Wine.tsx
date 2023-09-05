import wineStyle from './Wine.module.scss';
import React from 'react';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import WineData from '../../test-data/Wine.json';

function Wine() {

    return (
        <div className="container">
            <div className={wineStyle.wineMain}>
                {WineData.map((item, index) => (
                    <div key={index} className={wineStyle.wineItem}>
                        <img src={item.src} alt={item.name} />
                        <p>{item.name}</p>
                        <p className={wineStyle.winePrice}>{item.price}</p>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Wine;
