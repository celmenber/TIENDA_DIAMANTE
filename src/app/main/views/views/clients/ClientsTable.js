import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useClient, useCart } from "src/app/hooks";

function Row(props) {
  const { row } = props;
  const {setSelectedCartId, selectCartsByClientId} = useCart()
  const [open, setOpen] = React.useState(false);
  const orders = selectCartsByClientId(row.id);
  const navigate = useNavigate();
  const handleOrderClick = (id) => {
    setSelectedCartId(id);
    navigate(`/ordenes/${id}`);
  };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align="center">
          <Avatar src={row.avatar} alt={row.name[0]}>
            {!row.avatar || row.avatar === "" ? row.name[0] : ""}
          </Avatar>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {row.id}
        </TableCell>
        <TableCell align="center">{row.name}</TableCell>
        <TableCell align="center">{row.points}</TableCell>
        <TableCell align="center">{row.phoneNumber}</TableCell>
        <TableCell align="center">{row.email}</TableCell>
        <TableCell align="center">{row.affiliatorId}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {orders.length ? (
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Ordenes recientes
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Fecha</TableCell>
                      <TableCell>Estado</TableCell>
                      <TableCell align="center">C. Products</TableCell>
                      <TableCell align="center">
                        Costo total Total ($)
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {orders.map((order, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          ":hover": {
                            backgroundColor: "#dedfe3",
                            cursor: "pointer",
                          },
                        }}
                        onClick={() => handleOrderClick(order.id)}
                      >
                        <TableCell component="th" scope="row">
                          {order.date}
                        </TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell align="center">
                          {order.items.length}
                        </TableCell>
                        <TableCell align="center">{order.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            ) : (
              <Box sx={{ margin: 1 }}>

                <Typography variant="h5" color={"GrayText"}>
                  Este Cliente no tiene ordenes
                </Typography>
              </Box>
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ClientsTable() {
  const { selectClients } = useClient();
  return (
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell align="center">Avatar</TableCell>
          <TableCell align="center">Id</TableCell>
          <TableCell align="center">Nombre</TableCell>
          <TableCell align="center">Puntos</TableCell>
          <TableCell align="center">Celular</TableCell>
          <TableCell align="center">E-mail</TableCell>
          <TableCell align="center">Id Afiliador</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {selectClients.map((row) => (
          <Row key={row.id} row={row} />
        ))}
      </TableBody>
    </Table>
  );
}
