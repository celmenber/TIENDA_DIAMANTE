/* eslint-disable import/prefer-default-export */
import TYPES from "../type/CartType";
import { toInteger, toNumber } from "lodash";
// cada reducer tiene su propio state
const initialState = {
  cartSelectedId: "",
  cartSelectedType: "local",
  carts: [
    {
      id: "543",
      type: "order",
      payment: {
        ref: 1,
        type: "efectivo",
        amount: 0,
        date: "x"
      },
      clientId: "111",
      items: [
        {
          id: "6117",
          productId: "6117",
          quantity: 1,
          cost: 50000,
          valueCost: 50000,
          name: "p2",
          categories: { id: 228, name: "Wisky", slug: "Wisky" },
          description: "",
        },
        {
          id: "6155",
          productId: "6155",
          quantity: 1,
          cost: 50000,
          valueCost: 50000,
          name: "p3",
          categories: { id: 228, name: "Wisky", slug: "Wisky" },
          description: "",
        },
      ],
      total: 0,
      status: "full",
      date: "5/8/2023",
    },
    {
      id: "275",
      type: "order",
      payment: {
        ref: 1,
        type: "efectivo",
        amount: 0,
        date: "x"
      },
      clientId: "111",
      items: [
        {
          id: "6080",
          productId: "6080",
          quantity: 1,
          cost: 50000,
          valueCost: 50000,
          name: "Old Parr",
          categories: { id: 228, name: "Wisky", slug: "Wisky" },
          description: "",
        },
      ],
      total: 0,
      status: "full",
      date: "5/8/2023",
    },
    {
      id: "390",
      type: "order",
      payment: {
        ref: 1,
        type: "efectivo",
        amount: 0,
        date: "x"
      },
      clientId: "000",
      items: [
        {
          id: "6117",
          productId: "6117",
          quantity: 1,
          cost: 50000,
          valueCost: 50000,
          name: "p2",
          categories: { id: 228, name: "Wisky", slug: "Wisky" },
          description: "",
        },
        {
          id: "6155",
          productId: "6155",
          quantity: 1,
          cost: 50000,
          valueCost: 50000,
          name: "p3",
          categories: { id: 228, name: "Wisky", slug: "Wisky" },
          description: "",
        },
        {
          id: "6080",
          productId: "6080",
          quantity: 1,
          cost: 50000,
          valueCost: 50000,
          name: "Old Parr",
          categories: { id: 228, name: "Wisky", slug: "Wisky" },
          description: "",
        },
      ],
      total: 0,
      status: "full",
      date: "5/8/2023",
    },
  ],
  divisas: [
    { id: "0", value: 50, src: "" },
    { id: "1", value: 100, src: "" },
    { id: "2", value: 200, src: "" },
    { id: "3", value: 500, src: "" },
    { id: "4", value: 1000, src: "" },
    { id: "5", value: 2000, src: "" },
    { id: "6", value: 5000, src: "" },
    { id: "7", value: 10000, src: "" },
    { id: "8", value: 20000, src: "" },
    { id: "9", value: 50000, src: "" },
    { id: "10", value: 100000, src: "" },
  ],
  openDivisas: false,
  searchText: "",
};

export const CartReducer = (state = initialState, action) => {
  const selectedCart = state.carts.find(
    (cart) => cart.id === state.cartSelectedId
  );
  switch (action.type) {
    case TYPES.CREATE_CART:
      return {
        ...state,
        carts: [
          ...state.carts,
          {
            id: `${state.carts.length + 1}`,
            type: "local",
            payment: {
              type: "efectivo",
              amount: 0,
              date: "x"
            },
            items: [],
            total: 0,
            status: "empty",
            date: "5/8/2023",
          },
        ],
      };
    case TYPES.DETELE_CART:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id != action.payload),
      };
    case TYPES.CANCEL_CART:
      state.carts.find((cart) => cart.id === action.payload).status =
        "Canceled";
      return {
        ...state,
      };
    case TYPES.SET_SELECTED_CART:
      return {
        ...state,
        cartSelectedId: action.payload,
      };
    case TYPES.ADD_PRODUCT:
      !selectedCart.items.find(
        (item) => item.id === String(action.payload.id)
      ) &&
        action.payload.stock_quantity &&
        selectedCart.items.push({
          id: String(action.payload.id),
          productId: String(action.payload.id),
          quantity: 1,
          cost: action.payload.price,
          costDisc: action.payload.costoDescuento,
          valueCost: action.payload.costoDescuento
            ? action.payload.costoDescuento
            : action.payload.price,
          name: action.payload.name,
          categories: action.payload.categories,
          description: action.payload.description,
        }) &&
        (selectedCart.status = "full");
      return { ...state };
    case TYPES.RETIRE_PRODUCT:
      return {
        ...state,
        carts: [
          ...state.carts.filter((cart) => cart.id != selectedCart.id),
          {
            ...selectedCart,
            items: selectedCart.items.filter(
              (item) => item.id !== `${action.payload.id}`
            ),
            status: !selectedCart.items.length ? "empty" : "full",
          },
        ],
      };
    case TYPES.INCREMENT_PRODUCT:
      //(num > 0 || cantidad - 1 > 0) && setCantidad((prev) => prev + num);
      const itemtoIncrement = selectedCart.items.find(
        (item) => item.id === action.payload
      );
      itemtoIncrement.quantity++;
      itemtoIncrement.valueCost =
        itemtoIncrement.quantity *
        (itemtoIncrement.costDesc
          ? itemtoIncrement.costDesc
          : itemtoIncrement.cost);
      return state;
    case TYPES.DECREMENT_PRODUCT:
      const itemtoDecrement = selectedCart.items.find(
        (item) => item.id === action.payload
      );
      itemtoDecrement.quantity - 1 > 0 && itemtoDecrement.quantity--;
      itemtoDecrement.valueCost =
        itemtoDecrement.quantity *
        (itemtoDecrement.costDesc
          ? itemtoDecrement.costDesc
          : itemtoDecrement.cost);
      return state;
    case TYPES.SET_ITEM_QUANTITY:
      const itemtoChange = selectedCart.items.find(
        (item) => item.id === action.payload.id
      );
      itemtoChange.quantity = action.payload.quantity;
      return state;
    case TYPES.CALCULATE_TOTAL:
      let costoAcumulado = 0;
      selectedCart.items
        .filter((item) => item.quantity)
        .forEach((item, itemIndex) => {
          costoAcumulado += toInteger(item.valueCost);
        });
      selectedCart.total = costoAcumulado;
      return state;
    case TYPES.SET_CART_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.payload,
      };
    case TYPES.SET_CLIENT_ID:
      selectedCart.clientId = action.payload;
      return { ...state };
    case TYPES.SET_PAYMENT_AMOUNT:  
      typeof toNumber(action.payload) === "number" &&
      (selectedCart.payment.amount = toNumber(action.payload))
      return { ...state };
    case TYPES.SET_PAYMENT_TYPE:
      selectedCart.payment.type = action.payload;
      return { ...state };
    case TYPES.SET_OPEN_DIVISAS:
      return {
        ...state,
        openDivisas: action.payload
      }
    case TYPES.RESET_PRODUCTS:
      selectedCart &&
        (selectedCart.items = []) &&
        (selectedCart.total = 0) &&
        (selectedCart.status = "empty");
      return { ...state };
    case TYPES.ADD_TO_TOTAL_PAY:
      selectedCart.payment.amount +=  toInteger(action.payload)
      return { ...state };
    case TYPES.SET_TYPE:
      return {
        ...state,
        cartSelectedType: action.payload
      }
    default:
      return { ...state };
  }
};
