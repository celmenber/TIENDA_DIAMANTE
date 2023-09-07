import {
  Box,
  Button,
  Modal,
  Typography,
  Tooltip,
  Avatar,
  TextField,
  Card,
  CardHeader,
} from "@mui/material";
import { useState } from "react";
import _ from "@lodash";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCart, useClient } from "src/app/hooks";
import { Add, PersonAdd } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const schema = yup.object().shape({
  cc: yup.string().required("Cedula necesaria"),
  cell: yup.string().required("Numero de telefono necesario"),
  name: yup.string().required("Nombre Necesario"),
});

const defaultValues = {
  cc: "",
  cell: "",
  name: "",
};

export default function CreateClientModalFormButton() {
  const { setSelectedCartClientId } = useCart()
  const { createClient } = useClient();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { control, formState, handleSubmit, reset } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const onSubmit = (formData) => {
    //setSelectedCartClientId(formData.)
    //createClient(formData);
    handleClose();
    reset();
  };
  const { isValid, dirtyFields, errors } = formState;

  return (
    <div>
      <Tooltip title={"Añadir cliente"} placement="left">
        <Button
          onClick={handleOpen}
          className="ml-5 text-2xl rounded"
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<PersonAdd/>}
        >
          Crear
        </Button>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardHeader title={"Registrar Cliente"} />
          <form
            name="createClientForm"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="cc"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"CC"}
                  fullWidth
                  autoFocus
                  type="text"
                  error={!!errors.cc}
                  helperText={errors?.cc?.message}
                  required
                />
              )}
            />
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label={"Nombre"}
                  autoFocus
                  type="text"
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  className="mb-12 mt-12"
                  required
                />
              )}
            />
            <Controller
              name="cell"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"Numero de telefono"}
                  fullWidth
                  autoFocus
                  type="cell"
                  error={!!errors.cell}
                  helperText={errors?.cell?.message}
                  required
                />
              )}
            />
            <div className="mt-24 flex align-center justify-between">
              <Button
                size="large"
                itemType="reset"
                color="primary"
                onClick={handleClose}
                variant="contained"
              >
                Cancelar
              </Button>
              <Button
                size="large"
                endIcon={<Add/>}
                color="secondary"
                variant="contained"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Crear
              </Button>
            </div>
          </form>
        </Card>
      </Modal>
    </div>
  );
}
