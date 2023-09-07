import { AddCircle, Delete, HdrPlus, ShoppingCart } from "@mui/icons-material";
import {
  Badge,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
} from "@mui/material";
import { useClient, useCart } from "src/app/hooks";

const CartList = () => {
  const { selectSelectedClient } = useClient();
  const {
    selectSelectedClientCarts: carts,
    setSelectedCartId,
    createCart,
    deleteCart,
    calculateTotal,
    selectType,
  } = useCart();
  const clientId = selectSelectedClient.id;

  const handleCartClick = (id) => {
    setSelectedCartId(id);
    calculateTotal();
  };
  const handleCreateCart = () => {
    createCart({ clientId: clientId });
    setSelectedCartId("");
  };
  const handleDeleteClick = (id) => {
    deleteCart(id);
  };
  return (
    <List component={"nav"} sx={{ width: "100%" }}>
      <ListSubheader>Historial de ordenes</ListSubheader>
      <Divider />
      {carts
        .filter((cart) => cart.type === selectType)
        .map((cart) => {
          return (
            <Tooltip
              key={cart.id}
              title={
                cart.status === "Canceled"
                  ? "orden cancelada"
                  : `orden ${cart.id}`
              }
              placement="left"
            >
              <ListItem
                key={cart.id}
                secondaryAction={
                  <IconButton
                    onClick={() => handleDeleteClick(cart.id)}
                    disabled={cart.status === "Canceled"}
                  >
                    <Delete />
                  </IconButton>
                }
                disablePadding
                sx={{
                  ":hover": {
                    backgroundColor: "text.terciary",
                  },
                }}
              >
                <ListItemButton
                  onClick={() => handleCartClick(cart.id)}
                  disabled={cart.status === "Canceled"}
                >
                  <ListItemIcon>
                    <Badge badgeContent={cart.items.length} color="primary">
                      <ShoppingCart />
                    </Badge>
                  </ListItemIcon>
                  <ListItemText
                    primary={`${cart.id}`}
                    secondary={`${cart.date}`}
                  />
                </ListItemButton>
              </ListItem>
            </Tooltip>
          );
        })}
    </List>
  );
};

export default CartList;
