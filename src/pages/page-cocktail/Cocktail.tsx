import ctStyle from './Cocktail.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callProductAllListAPI } from '../../apis/productAPICalls';
import { ThunkDispatch, StringRecord } from '../../types';

import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import { formatNumber } from '../../utils/FormatNumber';


function Cocktail() {

    const cocktailList = useSelector<StringRecord>(state => state.productPageReducer);

    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        dispatch(callProductAllListAPI({
            categoryCode: "category1"
        }));
    }, []);

    console.log("cocktail data check =====", JSON.stringify(cocktailList));


    return (
        <div className="container">
            <div className={ctStyle.cocktailMain}>
                {Array.isArray(cocktailList) && cocktailList.map((cocktail, index) => (
                    <div key={index} className={ctStyle.cocktailItem}>
                        <img src={cocktail.productIMGList[0].imageLocation} alt={cocktail.name} />
                        <p>{cocktail.name}</p>
                        <p className={ctStyle.cocktailPrice}>{formatNumber(cocktail.price)}</p>
                    </div>
                ))}
            </div>

            <CartBtn />
            <OrderBtn />
        </div>
    );
}

export default Cocktail;