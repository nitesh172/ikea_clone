import { HIDDEN, SHOW } from "./actionTypesShop";


export const reducerShop = (state = {active:false, show:false}, {type}) => {
        switch (type) {
            case SHOW:
                
                return {
                    ...state,
                    active:true
                }
            case HIDDEN:
                return{
                    ...state,
                    active:false,
                    show: true
                }
                
            default:
              return  {state}
        }

}
