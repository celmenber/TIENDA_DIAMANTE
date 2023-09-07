import {
  CardContent,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import CartInvoiceClientSelector from "./cartInvoiceModalClientSect/CartInvoiceClientSelector";
import settingsConfig from "app/configs/settingsConfig";
import CartInvoiceModalPayment from "./cartInvoiceModalPaymentSect/CartInvoiceModalPayment";
import CartInvoiceModalChange from "./cartInvoiceModalPaymentSect/CartInvoiceModalChange";

const CartInvoiceModalContent = ({ selectedCart }) => {
  return (
    <CardContent>
      <List>
        <ListItem>
          <CartInvoiceModalPayment/>
        </ListItem>
        <ListItem>
          <CartInvoiceModalChange/>
        </ListItem>
        <ListItem>
          <CartInvoiceClientSelector />
        </ListItem>
        <ListItem
          secondaryAction={
            <Typography
              color={settingsConfig.theme.main.palette.text.secondary}
              variant="h6"
            >
              #{selectedCart.id}
            </Typography>
          }
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Revision de orden:
          </Typography>
        </ListItem>
        <List sx={{ maxHeight: 100, overflow: "scroll" }}>
          {selectedCart.items.map((item) => {
            return (
              <ListItem
                key={item.id}
                secondaryAction={`$${item.valueCost.toLocaleString("es", {
                  style: "currency",
                  currency: "COP",
                })}`}
              >
                {item.name}×{item.quantity}
              </ListItem>
            );
          })}
        </List>
      </List>
      <Divider />
      <List>
        <ListItem
          className="text-3xl font-bold"
          secondaryAction={
            <Typography
              className="text-5xl font-bold"
              color={settingsConfig.theme.navbar.palette.secondary.light}
            >
              $
              {selectedCart.total.toLocaleString("es", {
                style: "currency",
                currency: "COP",
              })}
            </Typography>
          }
        >
          TOTAL A COBRAR:
        </ListItem>
      </List>
    </CardContent>
  );
};

export default CartInvoiceModalContent;
