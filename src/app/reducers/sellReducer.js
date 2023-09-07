import TYPES from "../type/SellType";

const initialState = {
    sellSearchText: ""
}

export const SellReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.setSellSearchText:
            state.sellSearchText = action.payload
            return state
        default: return {...state}
    }
}