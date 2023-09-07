import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
//import GoogleMap from 'google-map-react';
import { useState } from "react";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import OrdersStatus from "../../orders/OrdersStatus";
import { useClient, useCart } from "src/app/hooks";

function Marker(props) {
  return (
    <Tooltip title={props.text} placement="top">
      <FuseSvgIcon className="text-red">
        heroicons-outline:location-marker
      </FuseSvgIcon>
    </Tooltip>
  );
}

function OrderDetailsTab({orderId}) {
  const { selectClient } = useClient()
  const {selectCart} = useCart()
  const order = selectCart(orderId);
  const client = order.clientId && selectClient(order.clientId);
  const [map, setMap] = useState("shipping");

  return (
    <div>
      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">
            heroicons-outline:user-circle
          </FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Cliente
          </Typography>
        </div>

        <div className="mb-24">
          <div className="table-responsive mb-48">
            <table className="simple">
              <thead>
                <tr>
                  <th>
                    <Typography className="font-semibold">Nombre</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Email</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Telefono</Typography>
                  </th>
                  <th>
                    <Typography className="font-semibold">Compañia</Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="flex items-center">
                      <Avatar src={client?.avatar} />
                      <Typography className="truncate mx-8">
                        {`${client?.name}`}
                      </Typography>
                    </div>
                  </td>
                  <td>
                    <Typography className="truncate">{client?.email}</Typography>
                  </td>
                  <td>
                    <Typography className="truncate">
                      {client?.phoneNumber}
                    </Typography>
                  </td>
                  <td>
                    <span className="truncate">{client?.id}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Accordion
            className="border-0 shadow-0 overflow-hidden"
            expanded={map === "shipping"}
            onChange={() => setMap(map !== "shipping" ? "shipping" : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: "border border-solid rounded-16 mb-16" }}
            >
              <Typography className="font-semibold">
                Direccion de entrega
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col md:flex-row -mx-8">
              <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
              crXX cllXX #XX
              </Typography>
              <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                {
                  /*
                <GoogleMap
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY,
                  }}
                  defaultZoom={15}
                  defaultCenter={[
                    order.customer.shippingAddress.lat,
                    order.customer.shippingAddress.lng,
                  ]}
                >
                  <Marker
                    text={order.customer.shippingAddress.address}
                    lat={order.customer.shippingAddress.lat}
                    lng={order.customer.shippingAddress.lng}
                  />
                </GoogleMap>*/
                }
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion
            className="shadow-0 border-0 overflow-hidden"
            expanded={map === "invoice"}
            onChange={() => setMap(map !== "invoice" ? "invoice" : false)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              classes={{ root: "border border-solid rounded-16 mb-16" }}
            >
              <Typography className="font-semibold">Direccion de facturación</Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col md:flex-row -mx-8">
              <Typography className="w-full md:max-w-256 mb-16 md:mb-0 mx-8 text-16">
                crXX cllXX #XX
              </Typography>
              <div className="w-full h-320 rounded-16 overflow-hidden mx-8">
                {/*
                  
                <GoogleMap
                  bootstrapURLKeys={{
                    key: process.env.REACT_APP_MAP_KEY,
                  }}
                  defaultZoom={15}
                  defaultCenter={[
                    order.customer.invoiceAddress.lat,
                    order.customer.invoiceAddress.lng,
                  ]}
                >
                  <Marker
                    text={order.customer.invoiceAddress.address}
                    lat={order.customer.invoiceAddress.lat}
                    lng={order.customer.invoiceAddress.lng}
                  />
                </GoogleMap>
                  */}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">heroicons-outline:clock</FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Status de orden
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">Status</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Actualizado</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <OrdersStatus name={order.status} />
                </td>
                <td>{/*status.date*/}fecha/ce/e</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">
            heroicons-outline:currency-dollar
          </FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Payment
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">
                    Id de transaccion
                  </Typography>
                </th>
                <th>
                  <Typography className="font-semibold">
                    Tipo de pago
                  </Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Cantidad</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Fecha</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="truncate">
                    {order.payment.ref}
                  </span>
                </td>
                <td>
                  <span className="truncate">{order.payment.type}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.Amount}</span>
                </td>
                <td>
                  <span className="truncate">{order.payment.date}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="pb-48">
        <div className="pb-16 flex items-center">
          <FuseSvgIcon color="action">heroicons-outline:truck</FuseSvgIcon>
          <Typography className="h2 mx-12 font-medium" color="text.secondary">
            Shipping
          </Typography>
        </div>

        <div className="table-responsive">
          <table className="simple">
            <thead>
              <tr>
                <th>
                  <Typography className="font-semibold">
                    Tracking Code
                  </Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Carrier</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Weight</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Fee</Typography>
                </th>
                <th>
                  <Typography className="font-semibold">Date</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {/*order.shippingDetails.map((shipping) => (
                <tr key={shipping.date}>
                  <td>
                    <span className="truncate">{shipping.tracking}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.carrier}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.weight}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.fee}</span>
                  </td>
                  <td>
                    <span className="truncate">{shipping.date}</span>
                  </td>
                </tr>
              ))*/}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsTab;
