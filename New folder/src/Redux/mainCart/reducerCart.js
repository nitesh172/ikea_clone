import axios from "axios";
import { DELETE_ITEM_CART, GET_USER_CART, UPDATE_ITEM_COUNT } from "./actionTypesCart";

export const reducerCart = (state = {userCart: []}, {type, payload}) => {
    switch(type) {
        case GET_USER_CART:
            return {...state, userCart: payload};
        case DELETE_ITEM_CART:
            let arr = state.userCart.filter((e) => {
                return e._id !== payload._id;
            })
            return {...state, userCart: arr};
        case UPDATE_ITEM_COUNT:
            let arr1 = state.userCart.map((e)=>{
               if(e._id== payload._id)
                  e.count += 1
              return {...state, userCart: arr1};
            })

        default:
            return {...state};
    }
}


