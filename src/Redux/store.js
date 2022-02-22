import { createStore, combineReducers } from "redux";
import { reducerHome } from "./Home/reducerHome";

const rootReducer = combineReducers({
    home: reducerHome
})

export const store = createStore(rootReducer)