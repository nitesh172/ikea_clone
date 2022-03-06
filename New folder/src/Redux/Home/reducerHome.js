import { FALSE_BUTTON, TRUE_BUTTON } from "./actionTypesHome"


export const reducerHome = (state = { regionBtn: true }, action) => {
  switch (action.type) {
    case TRUE_BUTTON:
      return { ...state, regionBtn: false }
    case FALSE_BUTTON:
      return { ...state, regionBtn: true }

    default:
      return { ...state }
  }
}
