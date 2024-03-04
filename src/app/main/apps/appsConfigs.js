import ClientesAppConfig from './clientes/ClientesAppConfig';
import ProfileAppConfig from './profile/profileAppConfig';
import ProvedorAppConfig from './provedores/ProvedoresAppConfig';
import OrdenCompraAppConfig from './e-commerce/ECommerceAppConfig';
import PedidosAppConfig from './pedidos/PedidosAppConfig';
import CategoriasAppConfig from './categorias/CategoriasAppConfig';
import PresentacionAppConfig from './presentaciones/PresentacionAppConfig';
import MarcasAppConfig from './marcas/MarcasAppConfig';

const appsConfigs = [
  ProfileAppConfig,
  ClientesAppConfig,
  ProvedorAppConfig,
  OrdenCompraAppConfig,
  PedidosAppConfig,
  CategoriasAppConfig,
  PresentacionAppConfig,
  MarcasAppConfig,
];

export default appsConfigs;
