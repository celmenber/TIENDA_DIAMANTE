import FuseNavigation from '@fuse/core/FuseNavigation/FuseNavigation';
import {
  ListItem,
  Typography,
  List,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListSubheader,
  Box,
} from '@mui/material';
import { useCart, useClient } from 'src/app/hooks';
import { settingsConfig } from 'app/configs/settingsConfig';
import { PersonAdd } from '@mui/icons-material';
import CartInvoiceModal from '../InvoiceModal/CartInvoiceModal';
import CartItem from './CartItem';

const Cart = () => {
  const { selectSelectedCart: selectedCart, resetProducts } = useCart();
  const { selectClient } = useClient();
  const itemsInCart = selectedCart.items
    .filter((item) => item.id)
    .map((item) => {
      return {
        key: item.id,
        id: String(item.id),
        title: (
          <CartItem
            data={{
              id: item.id,
              name: item.name,
              quantity: item.quantity,
            }}
          />
        ),
        subtitle: `$${item.valueCost}`,
        type: 'group',
      };
    });

  return (
    <Box className="w-full">
      <List className="grid p-0 w-full h-full grid-rows-[min-content_0_auto_min-content]">
        <ListItem color="warning">
          <ListItemAvatar>
            <Avatar src={selectedCart.clientId && selectClient(selectedCart.clientId).avatar}>
              {selectedCart.clientId ? selectClient(selectedCart.clientId).name[0] : <PersonAdd />}
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            {selectedCart.clientId
              ? `${selectClient(selectedCart.clientId).name.slice(0, 8)}...`
              : 'Anonimo'}
          </ListItemText>
          <ListSubheader>Orden #{selectedCart.id}</ListSubheader>
        </ListItem>
        <Divider />
        <ListItem className="items-start" sx={{ overflow: 'scroll' }}>
          <FuseNavigation className="w-full" navigation={[...itemsInCart]} />
        </ListItem>
        <ListItem className="p-0 m-0 h-full">
          <Box
            className={`p-0 m-5 w-full border-2 rounded-md border-[${settingsConfig.theme.main.palette.secondary.main}]`}
          >
            <Typography variant="h5" className="px-10 pt-10 pb-0 w-full">
              $
              {selectedCart.total.toLocaleString('es', {
                style: 'currency',
                currency: 'COP',
              })}
            </Typography>
            <Typography variant="subtitle2" className="px-10 pt-0 pb-10 w-full">
              TOTAL
            </Typography>
            <CartInvoiceModal />
          </Box>
        </ListItem>
      </List>
    </Box>
  );
};

export default Cart;
