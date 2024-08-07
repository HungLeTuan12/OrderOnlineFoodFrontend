import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEMS_FAILURE, GET_ALL_CART_ITEMS_REQUEST, GET_ALL_CART_ITEMS_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_REQUEST } from "./Actiontype"
import { api } from "../../config/api";
// Find cart
export const findCart = (jwt) => async(dispatch) => {
    dispatch(FIND_CART_REQUEST);
    try {
        const data = await api.get('/api/cart/', {
            headers: {
                Authorization: `Bearer ${jwt}`
            }
        })
        console.log("--- FIND_CART_SUCCESS: ", data);
        dispatch({type: FIND_CART_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({type: FIND_CART_FAILURE, payload: error})
    }
}
// Get all cart item
export const getAllCartItems = (reqData) => async(dispatch) => {
    dispatch(GET_ALL_CART_ITEMS_REQUEST);
    try {
        const response = await api.get(`/api/carts/${reqData.cartId}/items`, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        console.log("--- GET_ALL_CART_ITEMS_SUCCESS: ", reqData.data);
        dispatch({type: GET_ALL_CART_ITEMS_SUCCESS, payload: reqData.data});
    }
    catch(error) {
        dispatch({type: GET_ALL_CART_ITEMS_FAILURE, payload: error})
    }
}
// Add item to cart
export const addItemToCart = (reqData) => async(dispatch) => {
    dispatch(ADD_ITEM_TO_CART_REQUEST);
    try {
        const data = await api.put(`/api/cart/add`, reqData.cartItem, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        console.log("--- GET_ALL_CART_ITEMS_SUCCESS: ", data);
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error})
    }
}
// Update cart item
export const updateCartItem = (reqData) => async(dispatch) => {
    dispatch(UPDATE_CART_ITEM_REQUEST);
    try {
        const data = await api.put(`/api/cart-item/update`, reqData.data, {
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        console.log("--- GET_ALL_CART_ITEMS_SUCCESS: ", data);
        dispatch({type: ADD_ITEM_TO_CART_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({type: ADD_ITEM_TO_CART_FAILURE, payload: error})
    }
}
// Remove cart item
export const removeCartItem = (cartItemId) => async(dispatch) => {
    dispatch(REMOVE_CART_ITEM_REQUEST);
    try {
        const data = await api.delete(`api/cart-item/${cartItemId}/delete`,{
            headers: {
                Authorization: `Bearer ${reqData.jwt}`
            }
        })
        console.log("--- REMOVE_CART_ITEM_SUCCESS: ", cartItemId);
        dispatch({type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId});
    }
    catch(error) {
        dispatch({type: REMOVE_CART_ITEM_FAILURE, payload: error})
    }
}
// Clear cart
export const clearCart = () => async(dispatch) => {
    dispatch(CLEAR_CART_REQUEST);
    try {
        const {data} = await api.put(`api/cart/clear`,{}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
        console.log("--- CLEAR_CART_SUCCESS: ", data);
        dispatch({type: CLEAR_CART_SUCCESS, payload: data});
    }
    catch(error) {
        dispatch({type: CLEAR_CART_FAILURE, payload: error})
    }
}