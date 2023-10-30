import { createActions, handleActions } from 'redux-actions';

const initialState = {};

/* 액션 */
export const GET_PRODUCT       = 'PRODUCTMain/GET_PRODUCT';

const actions = createActions({
    [GET_PRODUCT]: () => {},
});

/* 리듀서 */
const productPageReducer = handleActions(
    {
        [GET_PRODUCT]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default productPageReducer;