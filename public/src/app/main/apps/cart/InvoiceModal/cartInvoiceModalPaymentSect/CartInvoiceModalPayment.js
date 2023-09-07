import { Button, CardHeader, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"
import PaymentTypetoggle from "./PaymentTypetoggle"
import { useCart } from "src/app/hooks"

const CartInvoiceModalPayment = () => {
    const { selectSelectedCart: selectedCart, setSelectedCartPaymentAmount, setOpenDivisas } = useCart()
    return (
        <>
            <PaymentTypetoggle />
            <FormControl fullWidth className="ml-5">
                <InputLabel htmlFor="outlined-adornment-amount">
                    Recibido
                </InputLabel>
                <OutlinedInput
                    endAdornment={"COP"}
                    id="outlined-adornment-amount"
                    value={selectedCart.payment.amount}
                    onChange={(ev) => setSelectedCartPaymentAmount(ev.target.value)}
                    startAdornment={"$"}
                    label="Recibido"
                />
            </FormControl>
            
        </>


    )
}

export default CartInvoiceModalPayment