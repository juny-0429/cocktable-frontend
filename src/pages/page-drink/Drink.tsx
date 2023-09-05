import drinkStyle from './Drink.module.scss';
import React from 'react';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import DrinkData from '../../test-data/DrinkData.json';

function Drink() {

    return (
        <div className="container">
            <div className={drinkStyle.drinkMain}>
                {DrinkData.map((item, index) => (
                    <div key={index} className={drinkStyle.drinkItem}>
                        <img src={item.src} alt={item.name} />
                        <p>{item.name}</p>
                        <p className={drinkStyle.drinkPrice}>{item.price}</p>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Drink;
