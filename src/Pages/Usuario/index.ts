import { SPageListProps } from 'servisofts-component'
import Actions from './Actions'

import Login from './Page/Login'
import RegistroCliente from './Page/RegistroCliente'
import Perfil from './Page/Perfil'
// import UsuarioPage from './Page/UsuarioPage'
import ClientePerfilPage from './Page/ClientePerfilPage'

const Pages: SPageListProps = {
    login: Login,
    registro: RegistroCliente,
    "perfil": Perfil,
    // UsuarioPage,
    ClientePerfilPage
}


import usuarioReducer from './Reducer/usuarioReducer'
const Reducers = {
    usuarioReducer
}


export default {
    Pages,
    Actions,
    Reducers
};