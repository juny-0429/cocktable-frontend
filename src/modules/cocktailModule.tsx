import {createActions, handleActions} from 'redux-actions';

/* 초기값 */
type CocktailPageState = {

};

const initialState: CocktailPageState = {
};

/* 액션 */
export const GET_COCKTAIL       = 'COCKTAILMain/GET_COCKTAIL';

const action = createActions({
    [GET_COCKTAIL]: () => {},
});

/* 리듀서 */
const cocktailPageReducer = handleActions(
    {
        [GET_COCKTAIL]: (state, {payload}) => {

            return payload;
        },
    },
    initialState
);

export default cocktailPageReducer;