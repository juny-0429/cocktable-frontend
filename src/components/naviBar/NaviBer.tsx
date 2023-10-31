import navStyle from './NaviBar.module.scss'; 
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function NaviBar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const links = [
        { name: 'Cocktail', to: '/menu/cocktail' },
        { name: 'Wine', to: '/menu/wine' },
        { name: 'Food', to: '/menu/food' },
        { name: 'Drink', to: '/menu/drink' },
    ];

    return (
        <div className={navStyle.naviBarMain}>
            <div className={navStyle.naviBarMenu}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        className={`${navStyle.naviLink} ${currentPath === link.to ? navStyle.text : ''}`}
                        to={link.to}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NaviBar;
