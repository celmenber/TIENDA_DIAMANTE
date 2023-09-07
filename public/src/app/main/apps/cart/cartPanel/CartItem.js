import {
  Add,
  Cancel,
  Check,
  HighlightOff,
  HorizontalRule,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  IconButton,
  Input,
  Popper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { toInteger } from "lodash";
import { useCart } from "src/app/hooks";

const CartItem = ({
  data = {
    id: 999,
    name: "Producto",
    quantity: 0,
  },
}) => {
  const {
    calculateTotal,
    retireProductFromCart,
    increaseProductQuantity,
    decreaseProductQuantity,
    setItemQuantity,
  } = useCart();
  const [anchorEl, setAnchorEl] = useState(false);
  const [quantity, setQuantity] = useState(data.quantity);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  const retirarCart = () => {
    retireProductFromCart(data);
    calculateTotal();
  };
  const cambiar = (opt) => {
    opt ? increaseProductQuantity(data.id) : decreaseProductQuantity(data.id);
    calculateTotal();
  };
  const handleQuantityClick = (ev) => {
    !anchorEl && setAnchorEl(ev.currentTarget);
  };
  const confirmSetQuantity = () => {
    typeof toInteger(quantity) === "number" && toInteger(quantity) > 0
      ? setItemQuantity({
        id: data.id,
        quantity: toInteger(quantity),
      }) && setAnchorEl(null)
      : setQuantity(data.quantity);
    calculateTotal();
  };
  const cancelSetQuantity = () => {
    setQuantity(data.quantity);
    setAnchorEl(null);
  };

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          whiteSpace: "normal",
          marginBottom: 10,
        }}
      >
        <Typography>{data.name}</Typography>
        <IconButton onClick={() => retirarCart()}>
          <HighlightOff color="red" />
        </IconButton>
      </div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        size="small"
      >
        <Button onClick={() => cambiar(0)}>
          <HorizontalRule />
        </Button>
        <Button onClick={(ev) => handleQuantityClick(ev)} aria-describedby={id}>
          {!open ? (
            data.quantity
          ) : (
            <Input
              value={quantity}
              type="number"
              onChange={(ev) => setQuantity(ev.target.value)}
              sx={{ color: "background.paper" }}
            />
          )}
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <ButtonGroup contained>
            <Button endIcon={<Cancel />} onClick={cancelSetQuantity} />
            <Button endIcon={<Check />} onClick={confirmSetQuantity} />
          </ButtonGroup>
        </Popper>
        <Button onClick={() => cambiar(1)}>
          <Add />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default CartItem;
