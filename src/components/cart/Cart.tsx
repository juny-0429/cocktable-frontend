import cartStyle from './CartItem.module.scss';
import React from 'react';

import { FiShoppingCart } from 'react-icons/fi'; // https://react-icons.github.io/react-icons
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoRemoveCircleSharp } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';

// 사용 예시:
{/* <IoRemoveCircleSharp size={40} color="#FF5B5B" /> */}

function Cart() {

    return (
        <div className={cartStyle.basketMain}>
            <div className={cartStyle.basketContant}>
                <div className={cartStyle.basketTitle}>
                    <FiShoppingCart size={30} />
                    <span>장바구니</span>
                </div>
                <button>비우기</button>
            </div>

            <div className={cartStyle.basketMenuList}>
                <div className={cartStyle.basketMenuItem}>
                    <AiFillCloseCircle className={cartStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.basketMenuPrice}>23,000원</p>
                    <div className={cartStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.basketMenuItem}>
                    <AiFillCloseCircle className={cartStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.basketMenuPrice}>23,000원</p>
                    <div className={cartStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.basketMenuItem}>
                    <AiFillCloseCircle className={cartStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.basketMenuPrice}>23,000원</p>
                    <div className={cartStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.basketMenuItem}>
                    <AiFillCloseCircle className={cartStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.basketMenuPrice}>23,000원</p>
                    <div className={cartStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.basketMenuItem}>
                    <AiFillCloseCircle className={cartStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.basketMenuPrice}>23,000원</p>
                    <div className={cartStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
            </div>

            <div className={cartStyle.basketTotal}>
                <span>합계 :</span>
                <span className={cartStyle.basketTotalPrice}>46,000원</span>
            </div>
            <button className={cartStyle.basketOrderButton}>주문하기</button>
        </div>
    );
}

export default Cart;