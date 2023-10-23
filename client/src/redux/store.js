import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';


const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer,
})


const middleware = [thunk];


const store = configureStore({
    reducer,
    devTools: composeWithDevTools(applyMiddleware(...middleware)),
});

export default store;
