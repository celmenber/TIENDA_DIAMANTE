import { Inbox, LocalMall } from '@mui/icons-material';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useCart, useClient } from 'src/app/hooks';

const CartTypeSwitch = () => {
  const { setType, selectType, setSelectedCartId } = useCart();
  const { setSelectedClientId } = useClient();
  const handleChangeType = (value) => {
    setSelectedCartId('');
    setSelectedClientId('');
    setType(value);
  };
  return (
    <div className="-ml-[47px] inline-flex">
      <ToggleButtonGroup
        orientation="vertical"
        exclusive
        className="rounded-r-none mt-64 h-min bg-[red]"
        color="secondary"
        value={selectType}
        onChange={(ev, value) => handleChangeType(value)}
      >
        <ToggleButton title="Recepcion local 0000" value="local">
          <LocalMall />
        </ToggleButton>
        <ToggleButton title="ordenes e-commerce" value="order">
          <Inbox /> 
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default CartTypeSwitch;
