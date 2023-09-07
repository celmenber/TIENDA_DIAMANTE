import {
  AddShoppingCart,
  CheckCircleOutline,
  RemoveCircleOutline,
  RemoveShoppingCart,
} from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { aniadir, selectSelectedCart, retirar, total } from "src/app/action/CartAction";
import { openCartPanel } from "../../apps/cart/store/stateSlice";
import { useCart } from "src/app/hooks";
import settingsConfig from "app/configs/settingsConfig";

const ProductComponent = ({
  data = {
    id: "",
    name: "Producto",
    categories: [],
    price: "0000",
    unidad: "Unit.",
    stock_quantity: "0",
    costoDescuento: 0,
    descripcion: "",
    inCart: false,
    images: { src: "" },
  },
  visible = true,
}) => {
  const dispatch = useDispatch()
  const { addProductFromCart, retireProductFromCart, calculateTotal, selectSelectedCart } = useCart()
  const isInCart = selectSelectedCart
    .items.map((product) => product.id)
    .includes(`${data.id}`);

  const aniadirCart = () => {
    dispatch(openCartPanel());
    addProductFromCart(data)
    calculateTotal()
  };
  const retirarCart = () => {
    dispatch(openCartPanel());
    retireProductFromCart(data)
    calculateTotal()
  };

  return (
    <Grid width={250} justifyContent={"center"} item visibility={visible ? "visible" : "hidden"}>
      <Card>
        <CardHeader
          sx={{
            backgroundColor: (isInCart && settingsConfig.theme.navbar.palette.secondary.light),
          }}
          title={
            <Tooltip title={data.name}>
            <Typography
              sx={{
                fontSize: 16,
                color: isInCart && "background.paper",
              }}
            >
              {data.name.slice(0, 15)}
              {data.name.length > 15 ? "..." : ""}
            </Typography>
            </Tooltip>
          }
          subheader={
            <>
              {data.costoDescuento ? (
                <>
                  <span
                    style={{
                      color: "red",
                      textDecoration: "line-through",
                      marginRight: 2,
                    }}
                  >
                    ${data.price}
                  </span>
                  <span style={{ color: "" }}>→ ${data.costoDescuento}</span>
                </>
              ) : (
                <Typography sx={{ color: isInCart && "background.paper" }}>
                  ${data.price}
                </Typography>
              )}
              {data.unidad}
            </>
          }
          action={
            <IconButton aria-label="Activo">
              {isInCart ? (
                <CheckCircleOutline
                  sx={{ marginRight: 0, color: "background.paper" }}
                />
              ) : (
                <RemoveCircleOutline sx={{ marginRight: 0 }} />
              )}
            </IconButton>
          }
        />
        <CardMedia
          onClick={() => aniadirCart()}
          sx={{
            cursor: "pointer",
            transition: "0.2s",
            height: 120,
            ":hover": {
              opacity: 0.5,
            },
          }}
          component="img"
          image={data.images[0].src}
          alt={data.images[0].name}
        />
        <CardContent sx={{ paddingBottom: 0, height: 60, overflow: "scroll" }}>
          <Typography
            variant="body1"
            color={data.stock_quantity ? "text.primary" : "red"}
          >
            {data.stock_quantity
              ? "Unidades disponibles"
              : "Sin Unidades disponibles"}
          </Typography>
          <Typography
            variant="body2"
            display={"grid"}
            sx={{ color: "text.secondary", }}
            alignItems={"center"}
          >
            {data.categories.map((cat, catIndex) => {
              return <span key={catIndex}>{cat.name}</span>;
            })}
          </Typography>
        </CardContent>
        <CardActions sx={{ textAlign: "right", display: "grid" }}>
          <Button
            aria-label="añadir al cart"
            onClick={() => (!isInCart ? aniadirCart() : retirarCart())}
            sx={{
              border: "solid 2px gray",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "Background",
                color: "white",
              },
            }}
            disabled={!data.stock_quantity}
          >
            {!isInCart ? <AddShoppingCart /> : <RemoveShoppingCart />}
            {`${!isInCart ? "Añadir al" : "Retirar del"} carrito`}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductComponent;
