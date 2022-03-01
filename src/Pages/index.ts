import { SPageListProps } from 'servisofts-component'
import Chat from './Chat';
import Usuario from './Usuario';

import Estado from './Estado';
import Test from './Test';
import CargaPage from './CargaPage';
import Llamadas from './Llamadas';
import Camara from './Camara';
import Ajustes from './Ajustes';
const Pages: SPageListProps = {
    "carga": CargaPage,
    "test": Test,
    "estado": Estado,
    "llamadas": Llamadas,
    "camara": Camara,
    "ajuste": Ajustes,
    ...Chat.Pages,
    ...Usuario.Pages,

}


export const Reducer = {
    ...Usuario.Reducers,
    ...Chat.Reducers,
}

export default Pages;