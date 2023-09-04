import foodStyle from './Food.module.scss';
import React from 'react';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import FoodData from '../../test-data/FoodData.json';

function Food() {
    console.log("FoodData = ", FoodData);

    return (
        <div className={foodStyle.foodContainer}>
            <div className={foodStyle.foodContant}>
                {FoodData.map((item, index) => (
                    <div key={index} className={foodStyle.foodItem}>
                        <img src={item.src} alt={item.name} />
                        <p>{item.name}</p>
                        <p className={foodStyle.foodPrice}>{item.price}</p>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Food;
