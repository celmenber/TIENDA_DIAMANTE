import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import { useProduct } from 'src/app/hooks';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { Search } from '@mui/icons-material';

export default function ProductsSearchBar() {
  const { selectProducts, selectProductsSearchText, setProductsSearchText } = useProduct();
  return (
    <Autocomplete
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      className="flex items-center w-full sm:max-w-256 space-x-8 px-16 round border-1 shadow-0"
      id="country-select-demo"
      options={selectProducts}
      autoHighlight
      fullWidth
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          {/* <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    /> */}
          {option.name} ({option.id})
        </Box>
      )}
      renderInput={() => (
        <OutlinedInput
          startAdornment={
            <InputAdornment>
              <Search />
            </InputAdornment>
          }
          placeholder="Nombre del producto"
          className="flex flex-1 border-0"
          value={selectProductsSearchText}
          onChange={(ev) => setProductsSearchText(ev.target.value)}
          label="Choose a country"
          inputProps={{
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
