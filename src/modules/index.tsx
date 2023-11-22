import { combineReducers } from 'redux';
import productReducer from './productModule';
import cartReducer from './cartModule';
import detailReducer from './detailModule';

const rootReducer = combineReducers({
    productReducer,
    detailReducer,
    cartReducer
})

export default rootReducer;