import { Money, Payment, Payments } from "@mui/icons-material"
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"
import { useCart } from "src/app/hooks"

const PaymentTypetoggle = () => {
    const {setSelectedCartPaymentType, selectSelectedCart} = useCart()
    const payType = selectSelectedCart.payment.type
    const handleChange = (event, newPayType) => {
        setSelectedCartPaymentType(newPayType);
    }
    return (
        <ToggleButtonGroup size="large" color="secondary" value={payType} exclusive onChange={handleChange}>
            <ToggleButton value={"efectivo"} title="Efectivo"><Payments className="mr-5"/>Efectivo</ToggleButton>
            <ToggleButton value={"credito"} title="Credito"><Payment className="mr-5"/>Credito</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default PaymentTypetoggle