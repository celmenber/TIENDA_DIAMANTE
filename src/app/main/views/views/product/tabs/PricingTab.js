import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

const cpControles = `<Controller
name="comparedPrice"
control={control}
render={({ field }) => (
  <TextField
    {...field}
    className="mt-8 mb-16"
    label="Compared Price"
    id="comparedPrice"
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
    type="number"
    variant="outlined"
    fullWidth
    helperText="Add a compare price to show next to the real price"
  />
)}
/>`

function PricingTab(props) {
  const methods = useFormContext();
  const { control, watch } = methods;

  return (
    <div>
      <Controller
        name="costo"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Costo"
            id="costo"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            autoFocus
            fullWidth
          />
        )}
      />
      {
        watch("costoDescuento") &&
        <Controller
          name="costoDescuento"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16"
              label="Costo con descuento"
              id="costoDescuento"
              InputProps={{
                startAdornment: <InputAdornment position="start">$</InputAdornment>,
              }}
              type="number"
              variant="outlined"
              fullWidth
            />
          )}
        />
      }

      <Controller
        name="costoImpuestos"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Costo con impuestos"
            id="costoImpuestos"
            InputProps={{
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            fullWidth
          />
        )}
      />

      
    </div>
  );
}

export default PricingTab;
