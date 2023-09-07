import { Add } from "@mui/icons-material";
import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useCart, useClient } from "src/app/hooks";
import CreateClientModalFormButton from "./CreateClientModalFormButton";

const CartInvoiceClientSelector = () => {
  const { selectClients, setSelectedClientId } = useClient();
  const { setSelectedCartClientId, selectSelectedCart } = useCart();
  const handleChange = (ev) =>{
    setSelectedClientId(ev.target.value)
    setSelectedCartClientId(ev.target.value)
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Seleccionar Cliente</InputLabel>
        <Select
          value={selectSelectedCart.clientId}
          label="Seleccionar Client"
          onChange={handleChange}
        >
          {selectClients.map((client) => {
            return <MenuItem key={client.id} value={client.id}>{client.name}</MenuItem>;
          })}
        </Select>
      </FormControl>
      {/*
                <Autocomplete
                    fullWidth
                    options={options.map((option) => option.name)}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Seleccionar cliente"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }} />)}
                />
                */}
      <CreateClientModalFormButton />
    </>
  );
};

export default CartInvoiceClientSelector;
