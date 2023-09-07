import TYPES from "../type/SellType"

export const setSellSearchText = (Data) => ({type:TYPES.setSellSearchText,payload:Data})

export const selectSellSearchText = (state) => state.sell.sellSearchText
