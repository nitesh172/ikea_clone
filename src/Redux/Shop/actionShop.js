import { HIDDEN, SHOW } from "./actionTypesShop"

export const showFunction = () =>{
    return {
        type: SHOW,
    }
}
export const hideFunction = () =>{
    return {
        type: HIDDEN,
    }
}