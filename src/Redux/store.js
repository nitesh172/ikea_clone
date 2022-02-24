import { createStore, combineReducers } from "redux";
import { reducerHome } from "./Home/reducerHome.js";
import { reducerSignup } from "./Register/reducerSignup.js";

const rootReducer = combineReducers({
    home: reducerHome,
    // signup: reducerSignup
    
})

export const store = createStore(rootReducer)