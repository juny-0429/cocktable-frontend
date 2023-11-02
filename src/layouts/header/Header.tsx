import headerStyle from './Header.module.scss';
import { Link } from 'react-router-dom';

import React from 'react';

const myTableNum: number = 1;

function Header() {

    return (
        <div className={headerStyle.headerMain}>
            <div className={headerStyle.headerContant}>

                <Link className={headerStyle.headerMainImg} to="http://localhost:3000/menu/cocktail">
                    <img src="/images/main_cocktail.png" alt="메인 칵테일 이미지" />
                    <span>Cocktable</span>
                </Link>

                <div className={headerStyle.headerInfo}>
                    <span>나만의 맛과 분위기를 즐길 수 있는 칵테일바</span>
                </div>
                
            </div>
            <p className={headerStyle.tableNumber}>{myTableNum}</p>

        </div>
    );
}

export default Header;