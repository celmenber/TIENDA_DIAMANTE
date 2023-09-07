import { ShoppingCart } from "@mui/icons-material";
import { Avatar, Badge, Button, Tooltip } from "@mui/material";
import clsx from "clsx";
import { useCart, useClient } from "src/app/hooks";

const DefaultCartButton = ({cart}) => {
    const { setSelectedCartId, selectSelectedCartId: currentId } = useCart();
    const { setSelectedClientId } = useClient()
    const handleClick = () => {
        setSelectedClientId("")
        setSelectedCartId(cart.id)
    }
    return (
        <Tooltip
            title={"carrito"}
            placement="left"
            active={currentId && currentId === cart.id ? 1: 0}
            sx={
                currentId && currentId === cart.id ? {
                    "&:after": {
                        position: "absolute",
                        top: 8,
                        right: 0,
                        bottom: 8,
                        content: "''",
                        width: 4,
                        borderTopLeftRadius: 4,
                        borderBottomLeftRadius: 4,
                        backgroundColor: "text.primary",
                    },
                }:{}
            }
        >
            <Button
                onClick={handleClick}
                className={clsx(
                    "clientButton rounded-0 py-4 h-auto min-h-auto max-h-none",
                    currentId && currentId === "default" && "active"
                )}
            >
                <Badge
            color="secondary"
            badgeContent={cart.items.length}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
                <Avatar>
                    <ShoppingCart />
                </Avatar>
          </Badge>
            </Button>
        </Tooltip>
    );
};

export default DefaultCartButton;
