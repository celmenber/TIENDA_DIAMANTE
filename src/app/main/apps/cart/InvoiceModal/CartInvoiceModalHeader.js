import { Close } from '@mui/icons-material';
import settingsConfigA from 'app/configs/settingsConfig';
import settingsConfigV from 'app/configs/settingsConfigV';

const { CardHeader, IconButton } = require('@mui/material');

const CartIvoiceModalHeader = ({ selectedCart, handleClose }) => {
  const USER_ROL = window.localStorage.getItem('RollUser');
  const Configuracion = USER_ROL === 'administrador' ? settingsConfigA : settingsConfigV;
  return (
    <CardHeader
      sx={{
        backgroundColor: Configuracion.theme.toolbar.palette.error.main,
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
