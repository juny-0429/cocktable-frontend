import orderStyle from './Order.module.scss';
import React from "react";

import { AiOutlineClose } from 'react-icons/ai';

function Order(props: any) {

    const { onClose } = props;

    return (
        <div className={orderStyle.orderMain}>

            <div className={orderStyle.orderContainer}>   

                <div className={orderStyle.orderTitle}>
                    <p>주문 내역</p>
                    <AiOutlineClose size={25} color="#787878" onClick={onClose} />
                </div> 

                <table>
                    <thead>
                        <tr>
                            <th>주문날짜</th>
                            <th>상품명</th>
                            <th>수량</th>
                            <th>상품금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2023/05/03 19:31:00</td>
                            <td>로제닭볶음탕</td>
                            <td>1</td>
                            <td>23,000원</td>
                        </tr>
                    </tbody>
                </table>

                <div className={orderStyle.orderSum}>
                    <span>합계 : </span>
                    <span>23,000원</span>
                </div>
            </div>
            
            
        </div>
    );
}

export default Order;