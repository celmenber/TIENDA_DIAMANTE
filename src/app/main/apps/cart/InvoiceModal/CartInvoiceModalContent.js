import { CardContent, Divider, List, ListItem, Typography } from '@mui/material';
import settingsConfigA from 'app/configs/settingsConfig';
import settingsConfigV from 'app/configs/settingsConfigV';
import CartInvoiceClientSelector from './cartInvoiceModalClientSect/CartInvoiceClientSelector';
import CartInvoiceModalPayment from './cartInvoiceModalPaymentSect/CartInvoiceModalPayment';
import CartInvoiceModalChange from './cartInvoiceModalPaymentSect/CartInvoiceModalChange';

const CartInvoiceModalContent = ({ selectedCart }) => {
  const USER_ROL = window.localStorage.getItem('RollUser');
  const Configuracion = USER_ROL === 'administrador' ? settingsConfigA : settingsConfigV;
  return (
    <CardContent>
      <List>
        <ListItem>
          <CartInvoiceModalPayment />
        </ListItem>
        <ListItem>
          <CartInvoiceModalChange />
        </ListItem>
        <ListItem>
          <CartInvoiceClientSelector />
        </ListItem>
        <ListItem
          secondaryAction={
            <Typography color={Configuracion.theme.main.palette.text.secondary} variant="h6">
              #{selectedCart.id}
            </Typography>
          }
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Revision de orden:
          </Typography>
        </ListItem>
        <List sx={{ maxHeight: 100, overflow: 'scroll' }}>
          {selectedCart.items.map((item) => {
            return (
              <ListItem
                key={item.id}
                secondaryAction={`$${item.valueCost.toLocaleString('es', {
                  style: 'currency',
                  currency: 'COP',
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
              color={Configuracion.theme.navbar.palette.secondary.light}
            >
              $
              {selectedCart.total.toLocaleString('es', {
                style: 'currency',
                currency: 'COP',
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
