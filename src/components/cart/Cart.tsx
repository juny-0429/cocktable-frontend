import cartStyle from './Cart.module.scss';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callCARTListAPI } from '../../apis/cartAPICalls';
import { ThunkDispatch, StringRecord } from '../../types';
import Modal from 'react-modal';

import { formatNumber } from '../../utils/FormatNumber';

import { FiShoppingCart } from 'react-icons/fi'; // https://react-icons.github.io/react-icons
import { IoAddCircleSharp } from 'react-icons/io5';
import { IoRemoveCircleSharp } from 'react-icons/io5';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

function Cart(props: any) {

    const { onClose } = props;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cartList = useSelector<StringRecord>(state => state.cartReducer);

    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        dispatch(callCARTListAPI({
            tableCode: "table1"
        }));
    }, []);

    console.log("cart data check =====", JSON.stringify(cartList));

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

    // itemCode를 기준으로 항목을 저장할 객체 생성
    const groupedItems: { [key: number]: any[] } = {};

    // itemCode를 기준으로 항목을 그룹화
    Array.isArray(cartList) && cartList.forEach((cart) => {

        const { itemCode } = cart;

        if (!groupedItems[itemCode]) {
            groupedItems[itemCode] = [];
        }

        groupedItems[itemCode].push(cart);
        
    });

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
                {Object.values(groupedItems).map((group, index) => (
                    <div key={index} className={cartStyle.cartItem}>
                        {group.length > 0 && (
                            <div>
                                <AiFillCloseCircle className={cartStyle.itemCloseIcon} size={25} color="#787878"/>
                                <p className={cartStyle.itemTitle}>{group[0].products[0].name}</p>
                                <p className={cartStyle.itemPrice}>{formatNumber(group[0].products[0].price)}</p>
                                <div className={cartStyle.itemOption}>
                                    {group.map((cart, innerIndex) => (
                                        <p key={innerIndex}>▪︎ {cart.options[0].optionName} : {cart.options[0].optionValue}</p>
                                    ))}
                                </div>
                                <div className={cartStyle.itemCount}>
                                    <IoRemoveCircleSharp size={40} color="#FF5B5B"/>
                                    <span>1</span>
                                    <IoAddCircleSharp size={40} color="#FF5B5B"/>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className={cartStyle.cartTotal}>
                <span>합계 :</span>
                <span className={cartStyle.cartTotalPrice}>46,000원</span>
            </div>
            <button className={cartStyle.cartOrderButton} onClick={openModal}>주문하기</button>

            <div>

                {/* 모달 */}
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    contentLabel="주문 확인"
                    ariaHideApp={false} // 필요에 따라 설정
                    className={cartStyle.modal}
                    overlayClassName="custom-overlay"
                >
                    <h2>주문하기를 완료하시겠습니까?</h2>
                    <div>
                        <button onClick={handleOrderConfirmation}>확인</button>
                        <button onClick={closeModal}>취소</button>
                    </div>
                </Modal>
            </div>
        </div>
    );
}

export default Cart;