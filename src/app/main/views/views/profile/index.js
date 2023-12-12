import { Edit, Mail, PermIdentity, PhoneAndroid } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Table,
  Typography,
  colors,
} from "@mui/material";
import { selectUser } from "app/store/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtenerUsuario } from "src/app/action/UsuarioAction";
import VentasTable from "./VentasTable";

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  return (
    <div className="flex w-full h-full">
      <div className="flex flex-col h-full w-400 md:ltr:mr-32 md:rtl:ml-32 p-20">
        <Card className="flex flex-col w-full h-full px-20 pt-24">
          <Avatar
            sx={{
              color: "text.secondary",
            }}
            variant="square"
            className="avatar text-32 font-bold w-96 h-96 mb-10"
          >
            {user.NOMBRES[0]}
          </Avatar>

          <Typography
            variant="h6"
            sx={{ color: "text.primary" }}
            fontWeight={"bolder"}
          >
            {user.NOMBRES}
          </Typography>
          <Typography variant="p" sx={{ color: "text.secondary" }}>
            {" "}
            {user.USER_ROL}
          </Typography>
          <CardContent>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.USERNAME} secondary="Email" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PhoneAndroid />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={"3000000"} secondary="Celular" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PermIdentity />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.ID_USER} secondary="Cedula" />
              </ListItem>
            </List>
          </CardContent>
          <CardActions sx={{ textAlign: "left", justifyContent: "end" }}>
            <IconButton
              sx={{
                ":hover": {
                  backgroundColor: "text.secondary",
                  color: "Background.paper",
                },
              }}
            >
              <Edit />
            </IconButton>
          </CardActions>
        </Card>
      </div>
      <div className="flex flex-col w-full h-full md:ltr:mr-32 md:rtl:ml-32 p-20 md:pl-0">
        <Card className="flex flex-col w-full h-full px-32 pt-24">
          <CardHeader subheader="2023" title="Ventas del dia" />
          <CardContent>
            <VentasTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
