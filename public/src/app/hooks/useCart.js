import { useSelector, useDispatch } from "react-redux";
import {
  addToTotalPayAction,
  aniadirAction,
  aumentarAction,
  createCartAction,
  deleteCartAction,
  reducirAction,
  reiniciarAction,
  retirarAction,
  setCartSearchTextAction,
  setItemQuantityAction,
  setOpenDivisasAction,
  setSelectedCartClientIdAction,
  setSelectedCartIdAction,
  setSelectedCartPaymentAmountAction,
  setSelectedCartPaymentTypeAction,
  setTypeAction,
  totalAction,
} from "../action/CartAction";

export const useCart = () => {
  const dispatch = useDispatch();
  // ACTIONS
  const createCart = (Data) => dispatch(createCartAction(Data));
  const setSelectedCartId = (Data) => dispatch(setSelectedCartIdAction(Data));
  const deleteCart = (Data) => dispatch(deleteCartAction(Data));
  const increaseProductQuantity = (Data) => dispatch(aumentarAction(Data));
  const decreaseProductQuantity = (Data) => dispatch(reducirAction(Data));
  const setItemQuantity = (Data) => dispatch(setItemQuantityAction(Data));
  const setCartSearchText = (Data) => dispatch(setCartSearchTextAction(Data));
  const resetProducts = () => dispatch(reiniciarAction());
  const addProductFromCart = (Data) => dispatch(aniadirAction(Data));
  const addToTotalPay = (Data) => dispatch(addToTotalPayAction(Data))
  const retireProductFromCart = (Data) => dispatch(retirarAction(Data));
  const calculateTotal = (Data) => dispatch(totalAction());
  const setSelectedCartClientId = (Data) => {
    debugger
    dispatch(setSelectedCartClientIdAction(Data));
  }

  const setSelectedCartPaymentAmount = (Data) => dispatch(setSelectedCartPaymentAmountAction(Data));
  const setSelectedCartPaymentType = (Data) => Data && dispatch(setSelectedCartPaymentTypeAction(Data));
  const setOpenDivisas = (Data) => dispatch(setOpenDivisasAction(Data));
  const setType = (Data) => Data && dispatch(setTypeAction(Data))

  // SELECTORES
  const selectSelectedCart = useSelector((state) =>
    state.cart.carts.find((cart) => cart.id === state.cart.cartSelectedId)
  );
  const selectCart = (id) => useSelector((state) =>
    state.cart.carts.find((cart) => cart.id === id));
  const selectCarts = useSelector((state) => state.cart.carts);
  const selectSelectedCartId = useSelector((state) => state.cart.cartSelectedId);
  const selectCartsByClientId = (id) => useSelector(state =>
    state.cart.carts.filter((cart) => cart.clientId === id));
  const selectSelectedClientCarts = useSelector((state) =>
    state.cart.carts.filter(
      (cart) => cart.clientId === state.clients.selectedClientId
    ));
  const selectCartSearchText = useSelector((state) => state).cart.searchText;
  const selectDefaultCart = useSelector((state) => state.cart.carts.find(cart => cart.id === "default"));
  const selectDivisas = useSelector((state)=> state.cart.divisas);
  const selectOpenDivisas = useSelector((state)=> state.cart.openDivisas);
  const selectType = useSelector((state) => state.cart.cartSelectedType);

  return {
    createCart,
    deleteCart,
    setCartSearchText,
    setItemQuantity,
    setSelectedCartId,
    addProductFromCart,
    retireProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    setSelectedCartClientIdAction,
    setSelectedCartPaymentAmount,
    setSelectedCartClientId,
    setSelectedCartPaymentType,
    setOpenDivisas,
    setType,
    resetProducts,
    calculateTotal,
    addToTotalPay,
    selectDefaultCart,
    selectCart,
    selectCarts,
    selectCartsByClientId,
    selectCartSearchText,
    selectSelectedCart,
    selectSelectedCartId,
    selectSelectedClientCarts,
    selectDivisas,
    selectOpenDivisas,
    selectType
  };
};
