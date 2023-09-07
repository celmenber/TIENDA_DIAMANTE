import * as React from "react";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";
import FusePageSimple from "@fuse/core/FusePageSimple";
import IconButton from "@mui/material/IconButton";
import {
  CardContent,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import ProductComponent from "./ProductComponent";
import ProductCategories from "./ProductCategories/ProductCategories";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { QrCodeScanner, Search } from "@mui/icons-material";
import { toUpper } from "lodash";
import { useEffect } from "react";
import { openCartPanel } from "../../apps/cart/store/stateSlice";
import ProductsHeader from "./ProductsHeader";
import { useCart, useProduct } from "src/app/hooks";


const Root = styled(FusePageSimple)(({ theme }) => ({
  "& .FusePageSimple-header": {
    backgroundColor: theme.palette.background.paper,
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderColor: theme.palette.divider,
  },
  "& .FusePageSimple-toolbar": {},
  "& .FusePageSimple-content": {},
  "& .FusePageSimple-sidebarHeader": {},
  "& .FusePageSimple-sidebarContent": {},
}));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Products = () => {
  const { selectProducts: products, selectProductsSearchText: searchText, getProducts, getCategories, selectProductLoaded } = useProduct()
  const { selectSelectedCartId: cartActive } = useCart()
  useEffect(() => {
    !selectProductLoaded &&
      getProducts() &&
      getCategories();
  }, [selectProductLoaded, getProducts, getCategories]);
  return selectProductLoaded ? (
    !cartActive ?
      <Root
        content={
          <div
            className="w-full h-full"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "text.secondary",
            }}
          >
            <CardContent>
              <Typography variant="h3">Seleccione un carrito</Typography>
            </CardContent>
          </div>
        }
      /> :
      products.length > 0 ? (
        <Root
          header={
            <>
              <ProductsHeader />
              <ProductCategories />
            </>
          }
          content={
            <>
              <Grid
                container
                alignContent="center"
                justifyContent="center"
                spacing={1}
                mt={1}
              >
                {products
                  .filter((item) => {
                    return (
                      /*(categories.includes(
                        item.categories[2] && item.categories[2]
                      ) ||
                        categories.includes(
                          item.categories[1] && item.categories[1]
                        ) ||
                        categories.includes(
                          item.categories[0] && item.categories[0]
                        )) &&*/
                      toUpper(item.name).includes(toUpper(searchText))
                    );
                  })
                  .map((producto, index) => {
                    return <ProductComponent data={producto} key={index} />;
                  })}
              </Grid>
              <div></div>
            </>
          }
          scroll="content"
        />
      ) : (
        <Root
          content={
            <div
              className="w-full h-full"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              <CardContent>
                <Typography variant="h3">No hay productos disponibles</Typography>
              </CardContent>
            </div>
          }
        />
      )
  ) : (
    <Box
      sx={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Products;
