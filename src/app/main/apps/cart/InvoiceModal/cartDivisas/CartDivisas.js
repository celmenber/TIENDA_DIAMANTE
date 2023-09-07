import { Close } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useCart } from "src/app/hooks";

const CartDivisas = () => {
  const {
    selectDivisas,
    selectOpenDivisas: openDivisas,
    setOpenDivisas,
    addToTotalPay,
    selectSelectedCart:cart
  } = useCart();
  return (
    <SwipeableDrawer
      disableBackdropTransition
      anchor="bottom"
      open={openDivisas}
      onClose={() => setOpenDivisas(false)}
      onOpen={() => setOpenDivisas(true)}
    >
      <List>
        <ListItem >
          <Typography className="text-4xl">
            ${cart.payment.amount}
          </Typography>
        </ListItem>
        <ListItem >
          <ButtonGroup size="large">
            {selectDivisas.map((divisa) => {
              return (
                <Button
                  key={divisa.id}
                  title={divisa.value}
                  onClick={() => addToTotalPay(divisa.value)}
                  className="text-4xl"
                >
                  ${divisa.value.toLocaleString("es")}COP
                </Button>
              );
            })}
          </ButtonGroup>
          <Button className="ml-5" variant="outlined" color="warning" onClick={() => setOpenDivisas(false)}>
            <Close />
          </Button>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default CartDivisas;
