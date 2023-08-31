import { FiShoppingCart } from 'react-icons/fi'; // https://react-icons.github.io/react-icons
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoRemoveCircleSharp } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
import CIStyle from './CartItem.module.scss';
import React from 'react';

// 사용 예시:
{/* <IoRemoveCircleSharp size={40} color="#FF5B5B" /> */}

function CartItem() {

    return (
        <div className={CIStyle.basketMain}>
            <div className={CIStyle.basketContant}>
                <div className={CIStyle.basketTitle}>
                    <FiShoppingCart size={30} />
                    <span>장바구니</span>
                </div>
                <button>비우기</button>
            </div>

            <div className={CIStyle.basketMenuList}>
                <div className={CIStyle.basketMenuItem}>
                    <AiFillCloseCircle className={CIStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={CIStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={CIStyle.basketMenuPrice}>23,000원</p>
                    <div className={CIStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={CIStyle.basketMenuItem}>
                    <AiFillCloseCircle className={CIStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={CIStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={CIStyle.basketMenuPrice}>23,000원</p>
                    <div className={CIStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={CIStyle.basketMenuItem}>
                    <AiFillCloseCircle className={CIStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={CIStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={CIStyle.basketMenuPrice}>23,000원</p>
                    <div className={CIStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={CIStyle.basketMenuItem}>
                    <AiFillCloseCircle className={CIStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={CIStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={CIStyle.basketMenuPrice}>23,000원</p>
                    <div className={CIStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={CIStyle.basketMenuItem}>
                    <AiFillCloseCircle className={CIStyle.basketMenuCloseIcon} size={25} color="#787878"/>
                    <p className={CIStyle.basketMenuTitle}>로제 닭볶음탕</p>
                    <p className={CIStyle.basketMenuPrice}>23,000원</p>
                    <div className={CIStyle.basketMenuCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
            </div>

            <div className={CIStyle.basketTotal}>
                <span>합계 :</span>
                <span className={CIStyle.basketTotalPrice}>46,000원</span>
            </div>
            <button className={CIStyle.basketOrderButton}>주문하기</button>
        </div>
    );
}

export default CartItem;