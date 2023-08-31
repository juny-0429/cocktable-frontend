import ctStyle from './Cocktail.module.scss';
import React from 'react';

function Cocktail() {

    return (
        <div>
            <div className={ctStyle.cocktailMain}>
                <div className={ctStyle.cocktailItem}>
                    <img src="/images/002.png" alt='테스트 이미지'/>
                    <p>벨리니</p>
                    <p className={ctStyle.cocktailPrice}>15,000</p>
                </div>
                <div className={ctStyle.cocktailItem}>
                    <img src="/images/002.png" alt='테스트 이미지'/>
                    <p>벨리니</p>
                    <p className={ctStyle.cocktailPrice}>15,000</p>
                </div>
                <div className={ctStyle.cocktailItem}>
                    <img src="/images/002.png" alt='테스트 이미지'/>
                    <p>벨리니</p>
                    <p className={ctStyle.cocktailPrice}>15,000</p>
                </div>
            </div>

        </div>
    );
}

export default Cocktail;