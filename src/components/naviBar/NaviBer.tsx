import navStyle from './NaviBar.module.scss'; 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NaviBar() {

    const [activeLink, setActiveLink] = useState<string>("Food");

    const links = [
        { name: 'Cocktail', to: '/menu/cocktail' },
        { name: 'Wine', to: '/menu/wine' },
        { name: 'Food', to: '/menu/food' },
        { name: 'Drink', to: '/menu/drink' },
    ];

    const handleLinkClick = (linkName: string) => {
        setActiveLink(linkName);
    };

    return (
        <div className={navStyle.naviBarMain}>
            <div className={navStyle.naviBarMenu}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        className={`${navStyle.naviLink} ${activeLink === link.name ? navStyle.text : ''}`}
                        to={link.to}
                        onClick={() => handleLinkClick(link.name)}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default NaviBar;