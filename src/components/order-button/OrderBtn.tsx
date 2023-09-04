import OBStyle from './OrderBtn.module.scss';
import React from "react";

function OrderBtn(props: any) {

    return (
        <button className={OBStyle.orderBtn} onClick={props.onClick}>주문하기</button>
    );
}

export default OrderBtn;