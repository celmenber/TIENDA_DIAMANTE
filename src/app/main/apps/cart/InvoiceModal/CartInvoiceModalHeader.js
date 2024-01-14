import { Close } from '@mui/icons-material';
import { settingsConfig, settingsConfigV } from 'app/configs/settingsConfig';

const { CardHeader, IconButton } = require('@mui/material');

const CartIvoiceModalHeader = ({ selectedCart, handleClose }) => {
  return (
    <CardHeader
      sx={{
        backgroundColor: settingsConfig.theme.toolbar.palette.error.main,
      }}
      title={`TOTAL: $${selectedCart.total.toLocaleString('es', {
        style: 'currency',
        currency: 'COP',
      })}`}
      action={
        <IconButton onClick={handleClose}>
          <Close />
        </IconButton>
      }
    />
  );
};
export default CartIvoiceModalHeader;
