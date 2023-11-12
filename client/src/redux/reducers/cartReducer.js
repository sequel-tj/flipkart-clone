import * as actionType from '../constants/cartConstant';


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product => product.id === item.id);

            if (exist) return { ...state, cartItems: state.cartItems.map(data => data.id === exist.id ? item : data) };
            else return { ...state, cartItems: [...state.cartItems, item] };

        case actionType.ADD_TO_CART_ERROR: return action.payload;

        case actionType.REMOVE_FROM_CART:
            return { ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload) }

        case actionType.REMOVE_FROM_CART_ERROR: return action.payload;

        case actionType.CART_RESET: return { cartItems: [] };

        case actionType.CART_RESET_ERROR: return action.payload;

        default: return state;
    }
}