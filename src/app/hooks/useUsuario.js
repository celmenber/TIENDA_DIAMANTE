/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  crearNuevoUsuarioAction,
  editarUsuarioAction,
  obtenerUsuarioAction,
} from '../action/UsuarioAction';

export const Usuarios = () => {
  // ejecutando los acciones atraves de los dispatch
  const dispatch = useDispatch();
  /// ////########//////#####//////#####################///////
  // const obtenerPerfil = () => dispatch(obtenerPerfilAction());
  // const obtenerTipoUser = () => dispatch(obtenerTipoUserAction());

  const obtenerUsuario = () => dispatch(obtenerUsuarioAction());
  const crearNuevoUsuario = (Dataform) => dispatch(crearNuevoUsuarioAction(Dataform));
  const editarUsuario = (Dataform) => dispatch(editarUsuarioAction(Dataform));

  // ejecutando los selectores para ontener los estados del store
  const User = useSelector((state) => state.Auth);
  const cargando = useSelector((state) => state.Usuario.loading);
  const cargandoLista = useSelector((state) => state.Usuario.loadinglista);
  const loadingactivar = useSelector((state) => state.Usuario.loadingactivar);
  const usuarioeditar = useSelector((state) => state.Usuario.usuarioeditar);
  const { usuariolista, error } = useSelector((state) => state.Usuario);
  // const { perfil } = useSelector((state) => state.Perfil);
  // const { tipouser } = useSelector((state) => state.TipoUser);

  // ejecutando para ontener los estados locales
  const [activeKey, setActiveKey] = useState(1);
  const [usuariodetalle, setUsuariodetalle] = useState({});
  const [selectActivar, setSelectActivar] = useState(false);
  const [visibleNUS, setVisibleNUS] = useState(false);
  const [visibleUS, setVisibleUS] = useState(false);
  const [visiblePSW, setVisiblePSW] = useState(false);

  // nuevo state de Tenerencuenta
  const [datoUsuario, setDatoUsuario] = useState({
    /*  usuario: '',
        claveuno: '',
        estado: '',
        codperfil: '',
        codtipousuario: '',
        documento: '',
        nombres: '',
        apellidos: '', */
  });

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    setDatoUsuario({
      ...datoUsuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      const formularioDatos = {
        /* users:Usuario,
        password:Password,
        estado:,
        codperfil:,
        codtipousuario:,
        documento:,
        nombres:,
        apellidos:, */
      }
      crearNuevoUsuario(formularioDatos)
    }
  }

  // función que redirige Editaparques
  const EditaUsuarios = (Id) => {
    /*  const datos = usuariolista?.filter(U => U.UsuarioId === Id);
        dispatch(obtenerUsuarioEditar(datos));

        setDatoUsuario({
            Codigoparques: datos[0].ParqueId === null ? '' : datos[0].ParqueId,
            usuario: datos[0].Email === null ? '' : datos[0].Email,
            estado: datos[0].Estado === null ? '' : datos[0].Estado,
            codperfil: datos[0].PerfilId === null ? '' : datos[0].PerfilId,
            codtipousuario: datos[0].TipoUsuarioId === null ? '' : datos[0].TipoUsuarioId,
            documento: datos[0].Documento === null ? '' : datos[0].Documento,
            nombres: datos[0].Nombres === null ? '' : datos[0].Nombres,
            apellidos: datos[0].Apellidos === null ? '' : datos[0].Apellidos,
        })
        setVisibleUS(true); */
  };

  // función que redirige Editaservicio
  const UpdateUserEstado = (Id) => {
    /* const datos = usuariolista?.filter(U => U.UsuarioId === Id);
        dispatch(editarEstadoUsuarioAction({
            Id,
            setSelectActivar,
            estadoDatos: datos[0].Estado === null ? '' : datos[0].Estado,
        })); */
  };

  // función que redirige Eliminar Servicioparque
  const EliminarUsuarios = (id) => {
    /*     Swal.fire({
            title: '¿Estas seguro de eliminar este Usurio?',
            text: "El Usuario eliminado no se podrá recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                dispatch(borrarUsuarioAction(id));
            }
        }); */
  };

  return {
    User,
    onChangeFormulario,
    UpdateUserEstado,
    editarUsuario,
    obtenerUsuario,
    usuarioeditar,
    EditaUsuarios,
    EliminarUsuarios,
    usuariolista,
    //  obtenerPerfil,
    //  obtenerTipoUser,
    // perfil,
    // tipouser,
    selectActivar,
    setSelectActivar,
    datoUsuario,
    setDatoUsuario,
    activeKey,
    setActiveKey,
    usuariodetalle,
    setUsuariodetalle,
    visibleNUS,
    setVisibleNUS,
    visibleUS,
    setVisibleUS,
    visiblePSW,
    setVisiblePSW,
    cargando,
    cargandoLista,
    loadingactivar,
  };
};
