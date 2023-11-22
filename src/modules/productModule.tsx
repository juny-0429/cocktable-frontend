import { createActions, handleActions } from 'redux-actions';

const initialState = {};

/* 액션 */
export const GET_PRODUCTLIST       = 'PRODUCTLISTMain/GET_PRODUCTLIST';
export const GET_PRODUCT       = 'PRODUCTMain/GET_PRODUCT';
export const GET_WINE       = 'WINEMain/GET_WINE';

const actions = createActions({
    [GET_PRODUCTLIST]: () => {},
    [GET_PRODUCT]: () => {},
    [GET_WINE]: () => {},
});

/* 리듀서 */
const productReducer = handleActions(
    {
        [GET_PRODUCTLIST]: (state, {payload}) => {

            return payload;
        },
        [GET_PRODUCT]: (state, {payload}) => {

            return payload;
        },
        [GET_WINE]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default productReducer;