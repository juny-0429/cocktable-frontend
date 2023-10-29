import { combineReducers } from 'redux';
import cocktailReduser from './cocktailModule';
import foodReducer from './foodModule';

const rootReducer = combineReducers({
    cocktailReduser,
    foodReducer
})

export default rootReducer;