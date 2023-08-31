// import Basket from '../../component/Basket';
import foodStyle from './Food.module.scss';
import React, { useState } from 'react';

function Food() {

    const [isBasketVisible, setBasketVisible] = useState(false);

    const handleBasketClick = () => {
        setBasketVisible(!isBasketVisible);
    };
   
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

             {/* Basket */}
            {/* {isBasketVisible && <Basket />}

            <div className={orderBtnStyle.orderBtnBox}>
                <button onClick={handleBasketClick}>주문하기</button>
                <button onClick={handleBasketClick}>장바구니</button>
            </div> */}
        </div>
    )
}

export default Food;