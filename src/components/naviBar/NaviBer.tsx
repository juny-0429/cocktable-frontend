import navStyle from './NaviBar.module.scss'; 
import React from 'react';
import { Link } from 'react-router-dom';

function NaviBar() {

    return (
        <div className={navStyle.naviBarMain}>
            <div className={navStyle.naviBarMenu}>
                <p className={navStyle.text}>Cocktail</p>
                <p>Wine</p>
                <p>Food</p>
                <p>Drink</p>
            </div>
        </div>
    );
}

export default NaviBar;