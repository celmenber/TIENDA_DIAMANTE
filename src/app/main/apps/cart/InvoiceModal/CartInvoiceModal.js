import { Receipt } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  Modal,
} from "@mui/material";
import { useState } from "react";
import { useCart } from "src/app/hooks";
import CartIvoiceModalHeader from "./CartInvoiceModalHeader";
import CartInvoiceModalContent from "./CartInvoiceModalContent";
import CartDivisas from "./cartDivisas/CartDivisas";

const style = {
  display: "grid",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  br: 50,
};

const CartInvoiceModal = () => {
  const { selectSelectedCart: selectedCart } = useCart();
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button
        fullWidth
        title="Facturar"
        endIcon={<Receipt />}
        onClick={handleOpen}
        size="large"
        color="secondary"
        variant="contained"
        className="text-2xl m-0 rounded-md"
      >
        Facturar
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CartIvoiceModalHeader
            selectedCart={selectedCart}
            handleClose={handleClose}
          />
          <CartInvoiceModalContent selectedCart={selectedCart} />
          <CardActions>
            <Button
              className="text-2xl round-md"
              fullWidth
              title="Cobrar"
              variant="contained"
              size="large"
              color="secondary"
              endIcon={<Receipt />}
              disabled={!selectedCart.items.length}
            >
              Cobrar
            </Button>
            <CartDivisas />
          </CardActions>
        </Card>
      </Modal>
    </>
  );
};

export default CartInvoiceModal;
