/* eslint-disable react/no-unknown-property */
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { selectLabels } from './store/labelsSlice';

const StyledListItem = styled(ListItem)(({ theme, active }) => ({
  color: 'inherit!important',
  textDecoration: 'none!important',
  height: 40,
  width: '100%',
  borderRadius: 20,
  paddingLeft: 16,
  paddingRight: 16,
  marginBottom: 8,
  fontWeight: 500,
  '&.active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, .05)!important'
        : 'rgba(255, 255, 255, .1)!important',
    pointerEvents: 'none',
    '& .list-item-icon': {
      color: theme.palette.secondary.main,
    },
  },
  '& .list-item-icon': {
    marginRight: 16,
  },
}));

function NotesSidebarContent(props) {
  const dispatch = useDispatch();
  const labels = useSelector(selectLabels);

  /* 
  Pedidos
Buscar ordenes
1	70d4d7d0	Dolly Bullock	$ 73,31	Tarjeta de crédito	En reserva (no pagado)	25/04/2015 02:07:59
2	2003479c	Holmes Hines	$ 24,51	Controlar	Pago aceptado	2015/11/07 15:47:31
3	09f5443b	Serena Glover	$ 87,17	PayPal	error en el pago	26/11/2015 16:04:40
4	960898d0	Diana Príncipe	$ 26,98	Controlar	Entregado	23/11/2015 05:35:18
5	2d7f68de	Frankie Hewitt	$ 12,97	Transferencia bancaria	error en el pago	2015/01/13 06:21:21
6	9c991708	Cole Holcomb	$ 30,96	Controlar	Preparando el pedido	2015/01/17 04:21:08
7	7683b54d	Merrill Richardson	$ 63,36	PayPal	A la espera del pago de PayPal	2015/06/14 14:49:47
8	c1de0f75	Morgan Pitts	$ 45,74	Tarjeta de crédito	Enviado	2015/01/18 01:31:47
9	35a4dbc6	Krista Mathis	$ 15,31	Transferencia bancaria	Se acepta pago remoto	2016/02/14 14:22:58
10	a8bc5b17	Hayden Fitzgerald	$ 20,97	Tarjeta de crédito	Entregado	23/10/2015 03:02:55
  */

  return (
    <div className="px-16 py-24">
      <div
        component={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
      >
        <List className="">
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas"
            end
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:pencil-alt
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Todos" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas/pagados"
            end
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:bell
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Pagados" disableTypography />
          </StyledListItem>

          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas/entregados"
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:archive
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Entregados" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas/enviados"
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:archive
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Enviados" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas/reservado"
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:archive
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Reservados" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas/cancelado"
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:archive
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Cancelados" disableTypography />
          </StyledListItem>
          <StyledListItem
            button
            component={NavLinkAdapter}
            to="/apps/ordenesentregas/reintegrado"
            activeClassName="active"
          >
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:archive
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Reintegrados" disableTypography />
          </StyledListItem>
          {/*  {labels.map((label) => (
            <StyledListItem
              key={label.id}
              button
              component={NavLinkAdapter}
              to={`/apps/notes/labels/${label.id}`}
              end
              activeClassName="active"
            >
              <FuseSvgIcon className="list-item-icon" color="disabled">
                heroicons-outline:tag
              </FuseSvgIcon>
              <ListItemText className="truncate" primary={label.title} disableTypography />
            </StyledListItem>
          ))} */}
          {/* <StyledListItem button onClick={(ev) => dispatch(openLabelsDialog())}>
            <FuseSvgIcon className="list-item-icon" color="disabled">
              heroicons-outline:pencil
            </FuseSvgIcon>
            <ListItemText className="truncate" primary="Edit Labels" disableTypography />
          </StyledListItem> */}
        </List>
      </div>
    </div>
  );
}

export default NotesSidebarContent;
