import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { getProductsReducer } from './reducers/productReducer';


const reducer = combineReducers({
    getProducts: getProductsReducer,
})

const middleware = [thunk];


const store = configureStore({
    reducer,
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
});

export default store;
