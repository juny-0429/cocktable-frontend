import OBStyle from './OrderBtn.module.scss';
import React, {useState} from "react";
import Order from '../order/Order'

function OrderBtn(props: any) {

    const [isOrderView, setIsOrderView] = useState(false);

    const handleOrderClick = () => {
        setIsOrderView(!isOrderView);
    };

    const handleCloseOrder = () => {
        setIsOrderView(false);
    };

    return (
        <div className={OBStyle.orderBtnLayout}>
            <button className={OBStyle.orderBtn} onClick={handleOrderClick}>주문하기</button>
            {isOrderView && <Order onClose={handleCloseOrder} />}
        </div>
    );
}

export default OrderBtn;