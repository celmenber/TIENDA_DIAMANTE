import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';

function InventoryTab(props) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <div>
      <Controller
        name="id"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Id del producto"
            autoFocus
            id="id"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="unidades"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Unidades"
            id="unidades"
            variant="outlined"
            type="number"
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default InventoryTab;
