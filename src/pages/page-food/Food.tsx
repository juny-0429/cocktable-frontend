import foodStyle from './Food.module.scss';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callProductAllListAPI } from '../../apis/productAPICalls';
import { ThunkDispatch, StringRecord } from '../../types';

import OrderBtn from '../../components/order-button/OrderBtn';
import CartBtn from '../../components/cart-button/CartBtn';
import ProductDetail from '../../components/product-detail/ProductDetail';
import { formatNumber } from '../../utils/FormatNumber';


function Food() {
    
    const foodList = useSelector<StringRecord>(state => state.productReducer);

    const dispatch: ThunkDispatch = useDispatch();

    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

    useEffect(() => {
        dispatch(callProductAllListAPI({
            categoryCode: "category3"
        }));
    }, []);

    console.log("food data check =====", JSON.stringify(foodList));

    const productClickHandler = (productCode: string) => {
        setSelectedProduct(productCode);
    };

    const handleCloseDetail = () => {
        setSelectedProduct(null);
    };

    return (
        <div className="container">
            <div className={foodStyle.foodMain}>
                {Array.isArray(foodList) && foodList.map((food, index) => (
                    <div key={index} className={foodStyle.foodItem} onClick={() => productClickHandler(food.productCode)}>
                        <img src={food.productIMGList[0].imageLocation} alt={food.name} />
                        <p>{food.name}</p>
                        <p className={foodStyle.foodPrice}>{formatNumber(food.price)}원</p>
                    </div>
                ))}
            </div>

            <OrderBtn></OrderBtn>
            <CartBtn></CartBtn>

            {selectedProduct && (
                <ProductDetail
                    productCode={selectedProduct}
                    onClose={handleCloseDetail}
                />
            )}
        </div>
    );
}

export default Food;
