import { GET_ITEM } from "./actionTypesItem";

export const reducerItem = (state = {item: {}}, {type, payload}) => {
    switch(type) {
        case GET_ITEM:
            return {...state, item: payload};
        default:
            return {...state};
    }
}