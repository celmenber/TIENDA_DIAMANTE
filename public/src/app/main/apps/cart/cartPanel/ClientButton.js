import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import clsx from "clsx";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import { useCart, useClient } from "src/app/hooks";
import { Badge } from "@mui/material";
const Root = styled(Tooltip)(({ theme, active }) => ({
  width: 70,
  minWidth: 70,
  flex: "0 0 auto",
  ...(active && {
    "&:after": {
      position: "absolute",
      top: 8,
      right: 0,
      bottom: 8,
      content: "''",
      width: 4,
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main,
    },
  }),
}));

const StyledUreadBadge = styled("div")(({ theme, value }) => ({
  position: "absolute",
  minWidth: 18,
  height: 18,
  top: 4,
  left: 10,
  borderRadius: 9,
  padding: "0 5px",
  fontSize: 11,
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.secondary.contrastText,
  boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.35)",
  zIndex: 10,
}));

const StyledStatus = styled("div")(({ theme, value }) => ({
  position: "absolute",
  width: 12,
  height: 12,
  bottom: 4,
  left: 44,
  border: `2px solid ${theme.palette.background.default}`,
  borderRadius: "50%",
  zIndex: 10,

  ...(value === "complete" && {
    backgroundColor: "#4CAF50",
  }),

  ...(value === "new" && {
    backgroundColor: "#F44336",
  }),

  ...(value === "full" && {
    backgroundColor: "#FFC107",
  }),

  ...(value === "empty" && {
    backgroundColor: "#646464",
  }),
}));

const ClientButton = ({ client, onClick }) => {
  if (client) {
    const { selectSelectedClient: selectedClient } = useClient();
    const { selectCartsByClientId } = useCart();
    const cartSize = selectCartsByClientId(client.id).length;

    return (
      <Root
        title={client.name}
        placement="left"
        active={selectedClient && selectedClient.id === client.id ? 1 : 0}
      >
        <Button
          onClick={() => onClick(client.id)}
          className={clsx(
            "clientButton rounded-0 py-4 h-auto min-h-auto max-h-none",
            selectedClient && selectedClient.id === client.id && "active"
          )}
        >
          {client.unread && (
            <StyledUreadBadge>{client.unread}</StyledUreadBadge>
          )}
          <Badge
            color="secondary"
            badgeContent={cartSize}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src={client.avatar} alt={client.name}>
              {!client.avatar || client.avatar === "" ? client.name[0] : ""}
            </Avatar>
          </Badge>
        </Button>
      </Root>
    );
  } else {
    return;
  }
};

export default ClientButton;
