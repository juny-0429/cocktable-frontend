import CBStyle from './CartBtn.module.scss';
import React, { useState } from "react";
import Cart from '../cart/Cart';

function CartBtn(props: any) {

    const [isCartVisible, setIsCartVisible] = useState(false);

    const handleCartClick = () => {
        setIsCartVisible(!isCartVisible);
    };

    const handleCloseCart = () => {
        setIsCartVisible(false);
    };

    return (
        <div className={CBStyle.cartBtnLayout}>
            <button className={CBStyle.cartBtn} onClick={handleCartClick}>장바구니</button>
            {isCartVisible && <Cart onClose={handleCloseCart} />}
        </div>
    );
}

export default CartBtn;