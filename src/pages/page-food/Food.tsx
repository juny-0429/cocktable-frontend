import foodStyle from './Food.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callProductAllListAPI } from '../../apis/productAPICalls';
import { ThunkDispatch, StringRecord } from '../../types';

import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import { formatNumber } from '../../utils/FormatNumber';


function Food() {
    
    const foodList = useSelector<StringRecord>(state => state.productPageReducer);

    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        dispatch(callProductAllListAPI({
            categoryCode: "category3"
        }));
    }, []);

    console.log("food data check =====", JSON.stringify(foodList));


    return (
        <div className="container">
            <div className={foodStyle.foodMain}>
                {Array.isArray(foodList)  && foodList.map((food, index) => (
                    <div key={index} className={foodStyle.foodItem}>
                        <img src={food.productIMGList[0].imageLocation} alt={food.name} />
                        <p>{food.name}</p>
                        <p className={foodStyle.foodPrice}>{formatNumber(food.price)}</p>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Food;
