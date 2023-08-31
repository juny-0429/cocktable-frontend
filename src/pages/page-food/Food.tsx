import foodStyle from './Food.module.scss';
import React from 'react';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';

function Food() {
   
    return (
        <div>
            <div className={foodStyle.foodContant}>
                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>
            </div>

            <div className={foodStyle.foodContant}>
                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>

                <div className={foodStyle.foodItem}>
                    <img src="/images/001.png" alt='테스트 이미지'/>
                    <p>로제 닭볶음탕</p>
                    <p className={foodStyle.foodPrice}>23,000</p>
                </div>
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    )
}

export default Food;