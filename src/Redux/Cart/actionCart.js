import { ADD_ITEM_CART, DELETE_ITEM_CART, GET_USER_CART, UPDATE_ITEM_COUNT } from "./actionTypesCart.js";

export const getUserCart = (payload) => ({
    type: GET_USER_CART,
    payload
});

export const deleteItemCart = (payload) => ({
    type: DELETE_ITEM_CART,
    payload
});

export const updateItemCount = (payload) => ({
    type: UPDATE_ITEM_COUNT,
    payload
});

export const addItemCart = (payload) => ({
    type: ADD_ITEM_CART,
    payload
});

