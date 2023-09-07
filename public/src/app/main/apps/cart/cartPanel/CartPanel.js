import AppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import withReducer from "app/store/withReducer";
import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSwipeable } from "react-swipeable";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Cart from "./Cart";
import ClientList from "./ClientList";
import reducer from "../store";
//import { getContacts, selectContacts, selectSelectedContactId } from './store/contactsSlice';
import {
  closeCartPanel,
  openCartPanel,
  selectCartPanelState,
} from "../store/stateSlice";
import { Badge, Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import { Inbox, LocalMall, Replay, ShoppingCartCheckout } from "@mui/icons-material";
import { selectSelectedCart } from "src/app/action/CartAction";
import { selectSelectedClient } from "src/app/action/ClientAction";
import CartList from "./CartList";
import { useCart, useClient } from "src/app/hooks";
import settingsConfig from "app/configs/settingsConfig";
import CartTypeSwitch from "./CartTypeSwitch";

const Root = styled("div")(({ theme, opened }) => ({
  position: "sticky",
  display: "flex",
  top: 0,
  width: 70,
  maxWidth: 70,
  minWidth: 70,
  height: "100vh",
  zIndex: 1000,
  transition: "0.2s",

  ...(opened && {
    width: 360,
    maxWidth: 360,
    minWidth: 360,
  }),

  ...(!opened && {
    overflow: "hidden",
    animation: `hide-panel 1ms linear ${theme.transitions.duration.standard}`,
    animationFillMode: "forwards",
  }),

  "& > .panel": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 360,
    minWidth: 360,
    height: "100%",
    margin: 0,
    overflow: "hidden",
    zIndex: 1000,
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transform: "translate3d(0,0,0)",
    transition: theme.transitions.create(["transform"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard,
    }),
  },

  "@keyframes hide-panel": {
    "0%": {
      width: 300,
    },
    "99%": {
      width: 200,
    },
    "100%": {
      width: 70,
    },
  },
}));

function CartPanel(props) {
  const dispatch = useDispatch();
  const { selectSelectedClient: selectedClient } = useClient();
  const {
    selectSelectedCart: selectedCart,
    selectDefaultCart: defaultCart,
    resetProducts,
    selectType,
    setType,
  } = useCart();
  const state = useSelector(selectCartPanelState);
  const theme = useTheme();
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      return state && theme.direction === "rtl" && dispatch(closeCartPanel());
    },
    onSwipedRight: () => {
      return state && theme.direction === "ltr" && dispatch(closeCartPanel());
    },
  });

  /**
   * Click Away Listener
   */

  return (
    <Root opened={state ? 1 : 0} {...handlers}>
      <CartTypeSwitch/>
      <div className="panel flex flex-col max-w-full">
        <AppBar position="static" className="shadow-md">
          <Toolbar className="px-4 h-10 text-smaller">
            <div className="flex flex-1 items-center px-8 space-x-12">
              <IconButton
                component={Link}
                //onClick={() => dispatch(closeCartPanel())}
                to={`ordenes/${selectedCart && selectedCart.id}`}
                onClick={() =>
                  state
                    ? dispatch(openCartPanel)
                    : resetProducts(selectedCart.id)
                }
                disabled={!selectedCart}
                variant="outlined"
                color="inherit"
                sx={{
                  borderColor: "white",
                  borderWidth: 1,
                  ":hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
              >
                <Badge
                  color="secondary"
                  badgeContent={selectedCart && selectedCart.items.length}
                >
                  <FuseSvgIcon size={24}>
                    heroicons-outline:shopping-cart
                  </FuseSvgIcon>
                </Badge>
              </IconButton>
              <Typography
                className="text-16"
                sx={{ width: "max-content" }}
                color="inherit"
              >
                {state && "Recepcion local"}
              </Typography>
            </div>

            <div className="flex px-4">
              <IconButton
                onClick={(ev) => dispatch(closeCartPanel())}
                color="inherit"
                size="large"
              >
                <FuseSvgIcon>heroicons-outline:x</FuseSvgIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Paper className="flex flex-1 flex-row min-h-px shadow-0">
          <ClientList className="flex shrink-0" />
          {selectedClient ? (
            selectedCart ? (
              <Cart cart={selectedCart} />
            ) : (
              <CartList />
            )
          ) : selectedCart ? (
            <Cart cart={selectedCart} />
          ) : (
            <div className="flex flex-col flex-1 items-center justify-center p-24">
              <FuseSvgIcon size={128} color="disabled">
                heroicons-outline:shopping-cart
              </FuseSvgIcon>
              <Typography
                className="px-16 pb-24 mt-24 text-center"
                color="text.secondary"
              >
                Añada un producto o seleccione una orden para revisar.
              </Typography>
            </div>
          )}
        </Paper>
      </div>
    </Root>
  );
}

export default withReducer("cartPanel", reducer)(memo(CartPanel));
