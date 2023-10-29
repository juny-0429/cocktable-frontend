import {createActions, handleActions} from 'redux-actions';

const initialState = {};

/* 액션 */
export const GET_FOOD       = 'FOODMain/GET_FOOD';

const action = createActions({
    [GET_FOOD]: () => {},
});

/* 리듀서 */
const foodPageReducer = handleActions(
    {
        [GET_FOOD]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default foodPageReducer;