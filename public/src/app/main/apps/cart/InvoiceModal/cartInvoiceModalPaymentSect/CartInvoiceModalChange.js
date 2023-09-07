import { Calculate, Payments } from "@mui/icons-material";
import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import { useCart } from "src/app/hooks";

const CartInvoiceModalChange = () => {
  const { selectSelectedCart: cart, setOpenDivisas } = useCart();
  return (
    <>
      <FormControl fullWidth>
        <InputLabel htmlFor="outlined-adornment-amount">Cambio</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={"$"}
          endAdornment={"COP"}
          label={"Cambio"}
          disabled
          value={cart.payment.amount - cart.total}
        />
      </FormControl>
      <Button
        startIcon={<Payments />}
        title="Divisas"
        onClick={() => setOpenDivisas(true)}
        style={{ borderRadius: 5 }}
        className="ml-5 text-2xl"
        variant="outlined"
        color="secondary"
        size="large"
      >
        Divisas
      </Button>
      <Button
        title="Calculadora"
        onClick={() => setOpenDivisas(true)}
        style={{ borderRadius: 5 }}
        className="ml-5 text-2xl"
        variant="outlined"
        color="secondary"
        size="large"
      >
        <Calculate />
      </Button>
    </>
  );
};

export default CartInvoiceModalChange;
