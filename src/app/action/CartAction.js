import TYPES from "../type/CartType";

export const createCartAction = (Data) => ({
  type: TYPES.CREATE_CART,
  payload: Data,
});

export const deleteCartAction = (Data) => ({
  type: TYPES.DETELE_CART,
  payload: Data,
});

export const cancelCartAction = (Data) => ({
  type: TYPES.CANCEL_CART,
  payload: Data,
});

export const aniadirAction = (Data) => ({
  type: TYPES.ADD_PRODUCT,
  payload: Data,
});

export const retirarAction = (Data) => ({
  type: TYPES.RETIRE_PRODUCT,
  payload: Data,
});

export const aumentarAction = (Data) => ({
  type: TYPES.INCREMENT_PRODUCT,
  payload: Data,
});

export const reducirAction = (Data) => ({
  type: TYPES.DECREMENT_PRODUCT,
  payload: Data,
});

export const setCartSearchTextAction = (Data) => ({
  type: TYPES.SET_CART_SEARCH_TEXT,
  payload: `${Data}`,
});

export const setSelectedCartIdAction = (Data) => ({
  type: TYPES.SET_SELECTED_CART,
  payload: Data,
});

export const setSelectedCartPaymentAmountAction = (Data) => ({
  type: TYPES.SET_PAYMENT_AMOUNT,
  payload: Data,
});

export const setSelectedCartPaymentTypeAction = (Data) => ({
  type: TYPES.SET_PAYMENT_TYPE,
  payload: Data,
});

export const setSelectedCartClientIdAction = (Data) =>
 ({
  type: '222',
  payload: Data,
});

export const totalAction = () => ({ type: TYPES.CALCULATE_TOTAL });

export const setItemQuantityAction = (Data) => ({
  type: TYPES.SET_ITEM_QUANTITY,
  payload: Data,
});

export const getDivisasAction = () => {
  
}

export const setOpenDivisasAction = (Data) =>({
  type: TYPES.SET_OPEN_DIVISAS,
  payload: Data 
})

export const setDivisasAction = (Data) => ({
  type: TYPES.SET_DIVISAS,
  payload: Data,
})

export const addToTotalPayAction = (Data) => ({
  type: TYPES.ADD_TO_TOTAL_PAY,
  payload: Data
})

export const setTypeAction = (Data) => ({
  type: TYPES.SET_TYPE,
  payload: Data
})

export const reiniciarAction = () => ({ type: TYPES.RESET_PRODUCTS });
