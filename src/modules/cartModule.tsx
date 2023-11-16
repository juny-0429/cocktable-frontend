import { createActions, handleActions } from 'redux-actions';

const initialState = {};

/* 액션 */
export const GET_CART       = 'CARTMain/GET_CART';

const actions = createActions({
    [GET_CART]: () => {},
});

/* 리듀서 */
const cartReducer = handleActions(
    {
        [GET_CART]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default cartReducer;