import { combineReducers } from 'redux';
import productPageReducer from './productModule';
import cartReducer from './cartModule';

const rootReducer = combineReducers({
    productPageReducer,
    cartReducer
})

export default rootReducer;