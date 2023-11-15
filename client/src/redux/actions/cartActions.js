import axios from 'axios';

import * as actionType from '../constants/cartConstant'


// const URL = 'http://localhost:8000';
const URL = 'https://shopin-server.onrender.com';


export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products/${id}`);
        dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
    }
    catch (error) {
        dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message })
    }
}


export const removeFromCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
    }
    catch (error) {
        dispatch({ type: actionType.REMOVE_FROM_CART_ERROR, payload: error.message });
    }
}

export const resetCart = () => async(dispatch) => {
    try {
        dispatch({ type: actionType.CART_RESET});
    }
    catch (error) {
        dispatch({ type: actionType.CART_RESET, payload: error.message });
    }
}