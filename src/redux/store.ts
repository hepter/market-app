import { combineReducers, createStore } from 'redux';
import filter from "./filter/reducer";
import basket from "./basket/reducer";

const reducers = combineReducers({
    filter,
    basket
});


export const store = createStore(reducers);
