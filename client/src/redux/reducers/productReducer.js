import * as actionType from '../constants/productConstant'


export const getProductsReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS: return action.payload;
        case actionType.GET_PRODUCTS_FAIL: return action.payload ;
        default: return state;
    }
}