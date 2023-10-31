import wineStyle from './Wine.module.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callWineAllListAPI } from '../../apis/productAPICalls';
import { ThunkDispatch, StringRecord } from '../../types';

import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import { formatNumber } from '../../utils/FormatNumber';
import { generateStarRating } from '../../utils/GenerateStarRating';

  
function Wine() {

    const wineList = useSelector<StringRecord>(state => state.productPageReducer);

    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        dispatch(callWineAllListAPI({
            categoryCode: "category2"
        }));
    }, []);

    console.log("wine list data check ===== ", JSON.stringify(wineList));

    return (
        <div className="container">
            <div className={wineStyle.wineMain}>
                {Array.isArray(wineList) && wineList.map((wine, index) => (
                    <div key={index} className={wineStyle.wineItem}>

                        <img src={wine.productIMGList[0].imageLocation} alt={wine.name} />

                        <div className={wineStyle.wineDetails}>

                            <div className={wineStyle.wineInfo}>
                                <div className={wineStyle.wineName}>
                                    <p>{wine.englishName}</p>
                                    <p className={wineStyle.nameKR} style={{ color: wine.wineInfo[0].wineType }}>{wine.name}({wine.wineInfo[0].wineType} wine)</p>
                                </div>
                                <p className={wineStyle.price}>{formatNumber(wine.price)}</p>
                            </div>

                            <div className={wineStyle.wineInfoContainer}>
                                <div className={wineStyle.wineFeatures}>
                                    <div>
                                        <p>산도  : {generateStarRating(wine.wineInfo[0].wineAcidity)}</p>
                                        <p>당도  : {generateStarRating(wine.wineInfo[0].wineSweetness)}</p>
                                        <p>바디  : {generateStarRating(wine.wineInfo[0].wineBody)}</p>
                                        <p>탄닌  : {generateStarRating(wine.wineInfo[0].wineTannin)}</p>
                                    </div>
                                </div>
                                <div className={wineStyle.alc}>
                                    <p>ALC</p>
                                    <p>{wine.wineInfo[0].wineABV}%</p>
                                </div>
                                <div className={wineStyle.origin}>
                                    <p>원산지</p>
                                    <p>{wine.wineInfo[0].wineOrigin}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>
        </div>
    );
}

export default Wine;
