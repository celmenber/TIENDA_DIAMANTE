const jwtServiceConfig = {
  user: {
    signIn: "api/auth/login",
    signUp: "api/auth/sign-up",
    accessToken: "api/auth/access-token",
    updateUser: "api/auth/user/update",
    viewUser: "api/users/view-user",
    viewUserById: "api/users/view-user/{id}",
    viewUserRoll: "api/users/view-user-roll",
    viewUSerRollById: "api/users/view-user-roll/{id}",
    viewUserAuditoria: "api/users/view-user-auditoria",
    viewUserAuditoriaById: "api/users/view-user-auditoria/{id}",
    viewUserPermiso: "api/users/view-user-permiso",
    viewUserPermisoById: "api/users/view-user-permiso/{id}",
    viewUserAcceso: "api/users/view-user-acceso",
    viewUserAccesoById: "api/users/view-user-acceso/{id}",
    viewUserGt: "api/users/view-user-gt",
    viewUserGtById: "api/users/view-user-gt/{id}",
    createUserauditoria: "api/users/create-user-auditoria",
    createUserPermiso: "api/users/create-user-permiso",
    createUserAcceso: "api/users/create-user-acceso",
    createUserGt: "api/users/create-user-gt",
    editUser: "api/users/edit-user",
    editUserAuditoria: "api/users/edit-user-auditoria/{id}",
    editUserPermiso: "api/users/edit-user-permiso/{id}",
    editUserGt: "api/users/edit-user-gt/{id}",
    editUser: "api/users/edit-user",
    deleteUser: "api/delete-user/{id}",
  },
  products: {
    V1: {
      viewMarca: "/V1/marca/view-marca",
      viewMarcaById: "/V1/marca/view-marca/{id}",
      createMarca: "/V1/marca/create-marca",
      editMarca: "/V1/marca/edit-marca/{id}",
      deleteMarca: "/V1/marca/delete-marca/{id}",
      viewPresentacion: "/V1/presentaciones/view-presentacion",
      viewPresentacionById: "/V1/presentaciones/view-presentacion/{id}",
      createPresentacion: "/V1/presentaciones/create-presentacion",
      editPresentacion: "/V1/presentaciones/edit-presentacion/{id}",
      deletePresentacion: "/V1/presentaciones/delete-presentacion/{id}",
      viewCategoria: "/V1/categorias/view-categoria",
      viewCategoriaById: "/V1/categorias/view-categoria/{id}",
      createCategoria: "/V1/categorias/create-categoria",
      editCategoria: "/V1/categorias/edit-categoria/{id}",
      deleteCategoria: "/V1/categorias/delete-categoria/{id}",
      viewProducto: "/V1/productos/view-producto",
      viewProductoById: "/V1/productos/view-producto/{id}",
      createProducto: "/V1/productos/create-producto",
      editProducto: "/V1/productos/edit-producto/{id}",
      estadoProducto: "/V1/productos/estado-producto/{id}",
      deleteProducto: "/V1/productos/delete-producto/{id}",
    },
    V2: {
      viewProducto: "api/v2/woocomerce/productos/view-producto",
      viewProductoById: "api/v2/woocomerce/productos/view-producto/{id}",
      createProducto: "api/v2/woocomerce/productos/create-producto",
      editProducto: "api/v2/woocomerce/productos/edit-producto/{id}",
      deleteProducto: "api/v2/woocomerce/productos/delete-producto/{id}",
      viewCategoria: "api/v2/woocomerce/categorias/view-categoria",
      viewCategoriaById: "api/v2/woocomerce/categorias/view-categoria/{id}",
      createCategoria: "api/v2/woocomerce/categorias/create-categoria",
      editCategoria: "api/v2/woocomerce/categorias/edit-categoria/{id}",
      deleteCategoria: "api/v2/woocomerce/categorias/delete-categoria/{id}",
      viewVariacionProductos:
        "api/v2/woocomerce/variacionProductos/view-variacionproductos",
      viewVariacionProductosById:
        "api/v2/woocomerce/variacionProductos/view-variacionproductos/{id}",
      createVariacionProductos:
        "api/v2/woocomerce/variacionProductos/create-variacionproductos",
      editVariacionProductos:
        "api/v2/woocomerce/variacionProductos/edit-variacionproductos/{id}",
      deleteVariacionProductos:
        "api/v2/woocomerce/variacionProductos/delete-variacionproductos/{id}",
      viewEtiquetasProductos:
        "api/v2/woocomerce/etiquetasProductos/view-etiquetasProductos",
      viewEtiquetasProductosById:
        "api/v2/woocomerce/etiquetasProductos/view-etiquetasProductos/{id}",
      createEtiquetasProductos:
        "api/v2/woocomerce/etiquetasProductos/create-etiquetasProductos",
      editEtiquetasProductos:
        "api/v2/woocomerce/etiquetasProductos/edit-etiquetasProductos/{id}",
      deleteEtiquetasProductos:
        "api/v2/woocomerce/etiquetasProductos/delete-etiquetasProductos/{id}",
      viewEnvioProducto: "api/v2/woocomerce/envioProductos/view-envioProducto",
      viewEnvioProductoById:
        "api/v2/woocomerce/envioProductos/view-envioProducto/{id}",
      createEnvioProducto:
        "api/v2/woocomerce/envioProductos/create-envioProducto",
      editEnvioProducto:
        "api/v2/woocomerce/envioProductos/edit-envioProducto/{id}",
      deleteEnvioProducto:
        "api/v2/woocomerce/envioProductos/delete-envioProducto/{id}",
      viewReviewProducto:
        "api/v2/woocomerce/reviewProductos/view-reviewProducto",
      viewReviewProductoId:
        "api/v2/woocomerce/reviewProductos/view-reviewProducto/{id}",
      createReviewProducto:
        "api/v2/woocomerce/reviewProductos/create-reviewProducto",
      editReviewProducto:
        "api/v2/woocomerce/reviewProductos/edit-reviewProducto/{id}",
      deleteReviewProducto:
        "api/v2/woocomerce/reviewProductos/delete-reviewProducto/{id}",
      viewAtributosProducto:
        "api/v2/woocomerce/atributosProductos/view-atributosProducto",
      viewAtributosProductoById:
        "api/v2/woocomerce/atributosProductos/view-atributosProducto/{id}",
      createAtributosProducto:
        "api/v2/woocomerce/atributosProductos/create-atributosProducto",
      editAtributosProducto:
        "api/v2/woocomerce/atributosProductos/edit-atributosProducto/{id}",
      deleteAtributosProducto:
        "api/v2/woocomerce/atributosProductos/delete-atributosProducto/{id}",
      viewAtributosTermsProducto:
        "api/v2/woocomerce/atributosTermsProductos/view-atributosTermsProducto",
      viewAtributosTermsProductId:
        "api/v2/woocomerce/atributosTermsProductos/view-atributosTermsProducto/{id}",
      createAtributosTermsProduct:
        "api/v2/woocomerce/atributosTermsProductos/create-atributosTermsProducto",
      editAtributosTermsProduct:
        "api/v2/woocomerce/atributosTermsProductos/edit-atributosTermsProducto/{id}",
      deleteAtributosTermsProduct:
        "api/v2/woocomerce/atributosTermsProductos/delete-atributosTermsProducto/{id}",
    },
  },
  ventas: {
    V1: {
      viewVenta: "/v1/ventas/view-venta",
      viewVentaById: "/v1/ventas/view-venta/{id}",
      createVenta: "/v1/ventas/create-venta",
      editVenta: "/v1/ventas/edit-venta/{id}",
      deleteVenta: "/v1/ventas/delete-venta/{id}",
      viewVentaproducto: "/v1/ventasproducto/view-ventaproducto",
      viewVentaproductoById: "/v1/ventasproducto/view-ventaproducto/{id}",
      createVentaproducto: "/v1/ventasproducto/create-ventaproducto",
      editVentaproducto: "/v1/ventasproducto/edit-ventaproducto/{id}",
      deleteVentaproducto: "/v1/ventasproducto/delete-ventaproducto/{id}",
      viewTipoventa: "/v1/tipoventa/view-tipoventa",
      viewTipoventaById: "/v1/tipoventa/view-tipoventa/{id}",
      createTipoventa: "/v1/tipoventa/create-tipoventa",
      editTipoventa: "/v1/tipoventa/edit-tipoventa",
      deleteTipoventa: "/v1/tipoventa/delete-tipoventa/{id}",
    },
    V2: {
      viewOrden: "/v2/woocomerce/ordenes/view-orden",
      viewOrdenById: "/v2/woocomerce/ordenes/view-orden/{id}",
      createOrden: "/v2/woocomerce/ordenes/create-orden",
      editOrden: "/v2/woocomerce/ordenes/edit-orden/{id}",
      deleteOrden: "/v2/woocomerce/ordenes/delete-orden/{id}",
      viewNotasorden: "/v2/woocomerce/notasordenes/view-notasorden",
      viewNotasordenById: "/v2/woocomerce/notasordenes/view-notasorden/{id}",
      createNotasorden: "/v2/woocomerce/notasordenes/create-notasorden",
      editNotasorden: "/v2/woocomerce/notasordenes/edit-notasorden/{id}",
      deleteNotasorden: "/v2/woocomerce/notasordenes/delete-notasorden/{id}",
    },
  },
  compras: {
    V1: {
      viewCompra: "/v1/compras/view-compra",
      viewCompraById: "/v1/compras/view-compra/{id}",
      createCompra: "/v1/compras/create-compra",
      editCompra: "/v1/compras/edit-compra",
      deleteCompra: "/v1/compras/delete-compra/{id}",
      viewCompraproducto: "/v1/comprasProducto/view-compraproducto",
      viewCompraproductoById: "/v1/comprasProducto/view-compraproducto/{id}",
      createCompraproducto: "/v1/comprasProducto/create-compraproducto",
      editCompraproducto: "/v1/comprasProducto/edit-compraproducto",
      deleteCompraproducto: "/v1/comprasProducto/delete-compraproducto/{id}",
      viewOrdencompra: "/v1/ordenescompra/view-ordencompra",
      viewOrdencompraById: "/v1/ordenescompra/view-ordencompra/{id}",
      createOrdencompra: "/v1/ordenescompra/create-ordencompra",
      editOrdencompra: "/v1/ordenescompra/edit-ordencompra",
      deleteOrdencompra: "/v1/ordenescompra/delete-ordencompra/{id}",
      viewOrdenescompraproducto:
        "/v1/ordenesProducto/view-ordenescompraproducto",
      viewOrdenescompraproductoById:
        "/v1/ordenesProducto/view-ordenescompraproducto/{id}",
      createOrdenescompraproducto:
        "/v1/ordenesProducto/create-ordenescompraproducto",
      editOrdenescompraproducto:
        "/v1/ordenesProducto/edit-ordenescompraproducto",
      deleteOrdenescompraproducto:
        "/v1/ordenesProducto/delete-ordenescompraproducto/{id}",
    },
  },
  arqueos: {
    V1: {
      viewArqueo: "/v1/varqueo/view-arqueo",
      viewArqueoById: "/v1/varqueo/view-arqueo/{id}",
      createArqueo: "/v1/varqueo/create-arqueo",
      editarArqueo: "/v1/varqueo/editar-arqueo/{id}",
      deleteArqueo: "/v1/varqueo/delete-arqueo/{id}",
      viewDivisas: "/v1/divisas/view-divisas",
      viewDivisasById: "/v1/divisas/view-divisas/{id}",
      createDivisas: "/v1/divisas/create-divisas",
      editarDivisas: "/v1/divisas/editar-divisas/{id}",
      deleteDivisas: "/v1/divisas/delete-divisas/{id}",
      viewDivisasArqueo: "/v1/divisasArqueo/view-divisasArqueo",
      viewDivisasArqueoById: "/v1/divisasArqueo/view-divisasArqueo/{id}",
      createDivisasArqueo: "/v1/divisasArqueo/create-divisasArqueo",
      editarDivisasArqueo: "/v1/divisasArqueo/editar-divisasArqueo/{id}",
      deleteDivisasArqueo: "/v1/divisasArqueo/delete-divisasArqueo/{id}",
    },
  },
  clientes: {
    v1: {
      viewCliente: "/v1/clientes/view-cliente",
      viewClienteById: "/v1/clientes/view-cliente/{id}",
      createCliente: "/v1/clientes/create-cliente",
      editCliente: "/v1/clientes/edit-cliente",
      deleteCliente: "/v1/clientes/delete-cliente/{id}",
      viewPunto: "/v1/puntos/view-punto",
      viewPuntoById: "/v1/puntos/view-punto/{id}",
      createPunto: "/v1/puntos/create-punto",
      editPunto: "/v1/puntos/edit-punto",
      deletePunto: "/v1/puntos/delete-punto/{id}",
      viewReferido: "/v1/referidos/view-referido",
      viewReferidoById: "/v1/referidos/view-referido/{id}",
      createReferido: "/v1/referidos/create-referido",
      editReferido: "/v1/referidos/edit-referido",
      deleteReferido: "/v1/referidos/delete-referido/{id}",
      viewAvatarCliente: "/v1/avatarcliente/view-avatar",
      viewAvatarClienteById: "/v1/avatarcliente/view-avatar/{id}",
      createAvatarCliente: "/v1/avatarcliente/create-avatar",
      editAvatarCliente: "/v1/avatarcliente/edit-avatar",
      deleteAvatarCliente: "/v1/avatarcliente/delete-avatar/{id}",
      viewAvatarEmpleado: "/v1/avatarempleado/view-avatar",
      viewAvatarEmpleadoById: "/v1/avatarempleado/view-avatar/{id}",
      createAvatarEmpleado: "/v1/avatarempleado/create-avatar",
      editAvatarEmpleado: "/v1/avatarempleado/edit-avatar",
      deleteAvatarEmpleado: "/v1/avatarempleado/delete-avatar/{id}",
    },
    V2: {
      viewCliente: "/v2/woocomerce/clientes/view-cliente",
      viewClienteById: "/v2/woocomerce/clientes/view-cliente/{id}",
      createCliente: "/v2/woocomerce/clientes/create-cliente",
      editCliente: "/v2/woocomerce/clientes/edit-cliente",
      deleteCliente: "/v2/woocomerce/clientes/delete-cliente/{id}",
      viewCupon: "/v2/woocomerce/cupones/view-cupon",
      viewCuponById: "/v2/woocomerce/cupones/view-cupon/{id}",
      createCupon: "/v2/woocomerce/cupones/create-cupon",
      editCupon: "/v2/woocomerce/cupones/edit-cupon",
      deleteCupon: "/v2/woocomerce/cupones/delete-cupon/{id}",
    },
  },
  empresa: {
    V1: {
      viewEmpresa: "/v1/empresa/view-empresa",
      viewEmpresaById: "/v1/empresa/view-empresa/{id}",
      createEmpresa: "/v1/empresa/create-empresa",
      editEmpresa: "/v1/empresa/edit-empresa/{id}",
      viewSucursal: "/v1/sucursal/view-sucursal",
      viewSucursalById: "/v1/sucursal/view-sucursal/{id}",
      viewCiudadsucursalById: "/v1/sucursal/view-ciudadsucursal/{id}",
      createSucursal: "/v1/sucursal/create-sucursal",
      editSucursal: "/v1/sucursal/edit-sucursal/{id}",
      estadoSucursal: "/v1/sucursal/estado-sucursal/{id}",
      deleteSucursal: "/v1/sucursal/delete-sucursal/{id}",
      viewEmpleado: "/v1/empleado/view-empleado",
      viewEmpleadoById: "/v1/empleado/view-empleado/{id}",
      viewEmpleadosucursalById: "/v1/empleado/view-empleadosucursal/{id}",
      createEmpleado: "/v1/empleado/create-empleado",
      editEmpleado: "/v1/empleado/edit-empleado/{id}",
      deleteEmpleado: "/v1/empleado/delete-empleado/{id}",
      viewCredito: "/v1/creditos/view-credito",
      viewCreditoById: "/v1/creditos/view-credito/{id}",
      createCredito: "/v1/creditos/create-credito",
      editestadoCredito: "/v1/creditos/editestado-credito",
      deleteCredito: "/v1/creditos/delete-credito/{id}",
    },
  },
};

export default jwtServiceConfig;
