import { createStore, combineReducers } from "redux";
import { reducerHome } from "./Home/reducerHome";
import { reducerShop } from "./Shop/reducerShop";
import { reducerItem } from "./Item/reducerItem";
import { reducerCart } from "./Cart/reducerCart";

const rootReducer = combineReducers({
    home: reducerHome,
    shop: reducerShop,
    item: reducerItem,
    userCart: reducerCart
})

export const store = createStore(rootReducer)