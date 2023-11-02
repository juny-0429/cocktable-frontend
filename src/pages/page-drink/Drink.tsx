import drinkStyle from './Drink.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callProductAllListAPI } from '../../apis/productAPICalls';
import { ThunkDispatch, StringRecord } from '../../types';

import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import { formatNumber } from '../../utils/FormatNumber';

function Drink() {

    const drinkList = useSelector<StringRecord>(state => state.productPageReducer);

    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        dispatch(callProductAllListAPI({
            categoryCode: "category4"
        }));
    }, []);

    console.log("food data check =====", JSON.stringify(drinkList));

    return (
        <div className="container">
            <div className={drinkStyle.drinkMain}>
                {Array.isArray(drinkList) && drinkList.map((drink, index) => (
                    <div key={index} className={drinkStyle.drinkItem}>
                        <img src={drink.productIMGList[0].imageLocation} alt={drink.name} />
                        <p>{drink.name}</p>
                        <p className={drinkStyle.drinkPrice}>{formatNumber(drink.price)}원</p>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Drink;
