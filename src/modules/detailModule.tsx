import { createActions, handleActions } from 'redux-actions';

const initialState = {};

/* 액션 */
export const GET_DETAIL       = 'DETAILMain/GET_DETAIL';

const actions = createActions({
    [GET_DETAIL]: () => {},
});

/* 리듀서 */
const detailReducer = handleActions(
    {
        [GET_DETAIL]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default detailReducer;