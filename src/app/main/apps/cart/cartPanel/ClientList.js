import FuseScrollbars from "@fuse/core/FuseScrollbars";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";
import { memo, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import ClientButton from "./ClientButton";
import { openCartPanel } from "../store/stateSlice";
import { useNavigate } from "react-router-dom";
import CreateClientModalFormButton from "../InvoiceModal/cartInvoiceModalClientSect/CreateClientModalFormButton";
import { useCart, useClient } from "src/app/hooks";
import DefaultCartButton from "./CartButton";
import { Avatar, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const Root = styled(FuseScrollbars)(({ theme }) => ({
  width: "70px",
  background: theme.palette.primary.light,
}));

function ClientList(props) {
  const dispatch = useDispatch();
  const { setSelectedClientId, selectClients: clients } = useClient();
  const {
    setSelectedCartId,
    selectCartsByClientId,
    selectType,
    selectCarts,
    createCart,
  } = useCart();
  const clientListScroll = useRef(null);
  const scrollToTop = () => {
    clientListScroll.current.scrollTop = 0;
  };
  const navigate = useNavigate();
  const handleClientClick = (clientId) => {
    navigate("productos");
    setSelectedClientId(clientId);
    setSelectedCartId("");
    dispatch(openCartPanel());
    scrollToTop();
  };
  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6 },
    show: { opacity: 1, scale: 1 },
  };
  return (
    <Root
      className="flex shrink-0 flex-col overflow-y-auto py-8 overscroll-contain"
      ref={clientListScroll}
      option={{ suppressScrollX: true, wheelPropagation: false }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col shrink-0"
      >
        {selectType === "local" && (
          <>
            <Button onClick={createCart}>
              <Avatar>
                <Add />
              </Avatar>
            </Button>
            <Divider className="mx-24 my-8" />
            {selectCarts
              .filter((cart) => cart.type === "local" && !cart.clientId)
              .map((cart) => (
                <DefaultCartButton key={cart.id} cart={cart} />
              ))}
          </>
        )}
        {clients.filter((client) => {
          return selectCartsByClientId(client.id).find(
            (cart) => cart.type === "local"
          );
        }).length ? <Divider className="mx-24 my-8" /> : ""}
        {clients
          .filter((client) => {
            return selectCartsByClientId(client.id).find(
              (cart) => cart.type === selectType
            );
          })
          .map((client) => {
            return (
              <motion.div variants={item} key={client.id}>
                <ClientButton
                  client={client}
                  onClick={() => handleClientClick(client.id)}
                />
              </motion.div>
            );
          })}
      </motion.div>
    </Root>
  );
}

export default memo(ClientList);
