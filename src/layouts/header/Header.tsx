import headerStyle from './Header.module.scss';

import React from 'react';

function Header() {

    return (
        <div className={headerStyle.headerMain}>
            <div className={headerStyle.headerContant}>
                <div className={headerStyle.headerMainImg}>
                    <img src="/images/main_cocktail.png" alt="메인 칵테일 이미지" />
                    <span>Cocktable</span>
                </div>
                <div className={headerStyle.headerInfo}>
                    <span>나만의 맛과 분위기를 즐길 수 있는 칵테일바</span>
                </div>
            </div>
            <p className={headerStyle.tableNumber}>29</p>
        </div>
    );
}

export default Header;