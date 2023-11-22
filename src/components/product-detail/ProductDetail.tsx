import detailStyle from "./ProductDetail.module.scss";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callProductAPI } from '../../apis/productAPICalls';
import { ThunkDispatch, StringRecord, ProductDetailProps } from '../../types';


function ProductDetail({ productCode, onClose }: ProductDetailProps) {

    const product = useSelector<StringRecord, any>(state => state.detailReducer);

    const dispatch: ThunkDispatch = useDispatch();

    useEffect(() => {
        dispatch(callProductAPI({
            categoryCode: "category3",
            productCode: "p1"
        }));
    }, []);

    return (
        <div className={detailStyle.detailMain}>
            
            {product.productIMGList?.[0] && (
                <div className={detailStyle.imageContainer} >
                    <img src={product.productIMGList[0].imageLocation} alt="상품이미지" className={detailStyle.detailImg} />
                </div>
            )}

            <div>
                <div className={detailStyle.title}>
                    <div>
                        <p className={detailStyle.name}>{product.name}</p>
                        <p className={detailStyle.englishName}>{product.englishName}</p>
                    </div>
                    <p className={detailStyle.size}>1~2 인분</p>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;