import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useProduct } from "src/app/hooks";
import { IconButton } from "@mui/material";
import { QrCode, Search } from "@mui/icons-material";

function ProductsHeader(props) {
  const { setProductsSearchText, selectProductsSearchText } = useProduct()

  const handleSearch = (e) => {
    setProductsSearchText(e.target.value)
  };

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full space-y-8 sm:space-y-0 items-center justify-between py-32 px-24 md:px-32">
      <Typography
        component={motion.span}
        initial={{ x: -20 }}
        animate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="flex text-24 md:text-32 font-extrabold tracking-tight"
      >
        Modulo de Caja
      </Typography>

      <div className="flex flex-1 items-center justify-end space-x-8 w-full sm:w-auto">
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
        >
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

          <Input
            placeholder="Nombre del Producto"
            className="flex flex-1"
            disableUnderline
            fullWidth
            value={selectProductsSearchText}
            inputProps={{
              "aria-label": "Search Products",
            }}
            onChange={(e) => handleSearch(e)}
          />
        </Paper>
        <IconButton color="secondary">
          <QrCode/>
        </IconButton>
      </div>
    </div>
  );
}

export default ProductsHeader;
