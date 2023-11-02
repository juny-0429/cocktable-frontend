import cartStyle from './Cart.module.scss';
import React, { useState } from 'react';
import Modal from 'react-modal';

import { FiShoppingCart } from 'react-icons/fi'; // https://react-icons.github.io/react-icons
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoRemoveCircleSharp } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

// 사용 예시:
{/* <IoRemoveCircleSharp size={40} color="#FF5B5B" /> */}

function Cart(props: any) {

    const { onClose } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    // 모달을 닫기 위한 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 주문 확인 함수
    const handleOrderConfirmation = () => {
        // 주문 확인 로직을 작성
        // 여기에서 주문을 처리하거나 다른 작업을 수행할 수 있습니다.
        
        // 주문이 완료되면 모달을 닫습니다.
        closeModal();
    };

    return (
        <div className={cartStyle.cartMain}>
            <div className={cartStyle.cartContant}>
                <div className={cartStyle.cartTitle}>
                    <FiShoppingCart size={30} />
                    <span>장바구니</span>
                </div>
                <button>비우기</button>
                <AiOutlineClose size={25} color="#787878" onClick={onClose} />
            </div>

            <div className={cartStyle.cartList}>
                <div className={cartStyle.cartItem}>
                    <AiFillCloseCircle className={cartStyle.itemCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.itemTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.itemPrice}>23,000원</p>
                    <div className={cartStyle.itemOption}>
                        <p>▪︎ 맵기 : 안맵게</p>
                        <p>▪︎ 면추가 : 당면</p>
                    </div>
                    <div className={cartStyle.itemCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.cartMenuItem}>
                    <AiFillCloseCircle className={cartStyle.itemCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.itemTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.itemPrice}>23,000원</p>
                    <div className={cartStyle.itemCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.cartMenuItem}>
                    <AiFillCloseCircle className={cartStyle.itemCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.itemTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.itemPrice}>23,000원</p>
                    <div className={cartStyle.itemCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.cartMenuItem}>
                    <AiFillCloseCircle className={cartStyle.itemCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.itemTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.itemPrice}>23,000원</p>
                    <div className={cartStyle.itemCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
                <div className={cartStyle.cartMenuItem}>
                    <AiFillCloseCircle className={cartStyle.itemCloseIcon} size={25} color="#787878"/>
                    <p className={cartStyle.itemTitle}>로제 닭볶음탕</p>
                    <p className={cartStyle.itemPrice}>23,000원</p>
                    <div className={cartStyle.itemCount}>
                        <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                        <span>1</span>
                        <IoAddCircleSharp size={40} color="#FF5B5B"/>
                    </div>
                </div>
            </div>

            <div className={cartStyle.cartTotal}>
                <span>합계 :</span>
                <span className={cartStyle.cartTotalPrice}>46,000원</span>
            </div>
            <button className={cartStyle.cartOrderButton} onClick={openModal}>주문하기</button>

            {/* 모달 */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="주문 확인"
                ariaHideApp={false} // 필요에 따라 설정

            >
                <h2>주문하기를 완료하시겠습니까?</h2>
                <div>
                    <button onClick={handleOrderConfirmation}>확인</button>
                    <button onClick={closeModal}>취소</button>
                </div>
            </Modal>
        </div>
    );
}

export default Cart;