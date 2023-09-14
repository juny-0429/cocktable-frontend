import wineStyle from './Wine.module.scss';
import React from 'react';
import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import WineData from '../../test-data/Wine.json';

function generateStarRating(rating: string) {
    const maxStars: number = 5; // 최대 별 개수
    const filledStars: number = parseInt(rating); // 특성 값에 따라 꽉 찬 별 개수를 정합니다
    const emptyStars = maxStars - filledStars; // 비어있는 별 개수를 계산합니다
  
    return (
      <>
        {[...Array(filledStars).keys()].map((index) => (
          <span key={index} className={wineStyle.filledStar}>★</span>
        ))}
        {[...Array(emptyStars).keys()].map((index) => (
          <span key={index} className={wineStyle.emptyStar}>☆</span>
        ))}
      </>
    );
}
  
function Wine() {

    return (
        <div className="container">
            <div className={wineStyle.wineMain}>
                {WineData.map((item, index) => (
                    <div key={index} className={wineStyle.wineItem}>

                        <img src={item.src} alt={item.name} />

                        <div className={wineStyle.wineDetails}>

                            <div className={wineStyle.wineInfo}>
                                <div className={wineStyle.wineName}>
                                    <p>{item.name}</p>
                                    <p className={wineStyle.nameKR} style={{ color: item.nameColor }}>{item.nameKR}</p>
                                </div>
                                <p className={wineStyle.price}>{item.price}</p>
                            </div>

                            <div className={wineStyle.wineInfoContainer}>
                                <div className={wineStyle.wineFeatures}>
                                    <div>
                                        <p>산도 :</p>
                                        <p>당도 :</p>
                                        <p>바디감 :</p>
                                        <p>탄닌 :</p>
                                    </div>
                                    <div>
                                        <p>{generateStarRating(item.acidity)}</p>
                                        <p>{generateStarRating(item.sweetness)}</p>
                                        <p>{generateStarRating(item.body)}</p>
                                        <p>{generateStarRating(item.tannin)}</p>
                                    </div>
                                </div>
                                <div className={wineStyle.alc}>
                                    <p>ALC</p>
                                    <p>{item.alc}</p>
                                </div>
                                <div className={wineStyle.origin}>
                                    <p>{item.originKR}</p>
                                    <p>{item.origin}</p>
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
