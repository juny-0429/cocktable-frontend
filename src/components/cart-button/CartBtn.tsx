import CBStyle from './CartBtn.module.scss';
import React, { useState } from "react";
import Cart from '../cart/Cart';

function CartBtn(props: any) {

    const [isCartView, setIsCartView] = useState(false);

    const handleCartClick = () => {
        setIsCartView(!isCartView);
    };

    const handleCloseCart = () => {
        setIsCartView(false);
    };

    return (
        <div className={CBStyle.cartBtnLayout}>
            <button className={CBStyle.cartBtn} onClick={handleCartClick}>장바구니</button>
            {isCartView && <Cart onClose={handleCloseCart} />}
        </div>
    );
}

export default CartBtn;