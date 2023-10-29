import { ThunkDispatch as ReduxThunkDispatch } from 'redux-thunk';

export type Product = {
    productCode: string;
    categoryCode: string;
    name: string;
    englishName: string;
    price: number;
    description: string;
    image: string | null; // 이미지 URL 또는 null
    salesYn: string;
    displayYn: string;
}

export type ThunkDispatch = ReduxThunkDispatch<{}, [], any>;

export type StringRecord = Record<string, string>;
