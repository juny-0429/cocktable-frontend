import CBStyle from './CartBtn.module.scss';
import React from "react";

function CartBtn(props: any) {

    return (
        <button className={CBStyle.cartBtn} onClick={props.onClick}>장바구니</button>
    );
}

export default CartBtn;