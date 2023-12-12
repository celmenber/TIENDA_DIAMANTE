import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

function ShippingTab(props) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <div>
      <div className="flex -mx-4">
        <Controller
          name="ancho"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Ancho"
              autoFocus
              id="ancho"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="alto"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Altura"
              id="altura"
              variant="outlined"
              fullWidth
            />
          )}
        />

        <Controller
          name="profundidad"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mt-8 mb-16 mx-4"
              label="Profundidad"
              id="profundidad"
              variant="outlined"
              fullWidth
            />
          )}
        />
      </div>

      <Controller
        name="peso"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Peso"
            id="peso"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="envio"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Envio"
            id="extraShippingFee"
            variant="outlined"
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default ShippingTab;
