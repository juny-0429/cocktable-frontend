import ctStyle from './Cocktail.module.scss';
import React from 'react';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import CocktailData from '../../test-data/Cocktail.json';

function Cocktail() {

    return (
        <div className="container">
            <div className={ctStyle.cocktailMain}>
                {CocktailData.map((item, index) => (
                    <div key={index} className={ctStyle.cocktailItem}>
                        <img src={item.src} alt={item.name}/>
                        <p>{item.name}</p>
                        <p className={ctStyle.cocktailPrice}>{item.price}</p>
                    </div>
                ))}
            </div>
            
            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Cocktail;