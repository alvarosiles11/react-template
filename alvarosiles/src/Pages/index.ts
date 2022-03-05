import { SPageListProps } from 'servisofts-component'
import Test from './Test';
import Ajustes from './template_001/Ajustes';
import Camara from './template_001/Camara';
import Chats from './template_001/Chats';
import Estados from './template_001/Estados';
import Llamadas from './template_001/Llamadas';



const Pages: SPageListProps = {
    "test": Test,
    "camara": Camara,
    "ajustes": Ajustes,
    "chats": Chats,
    "estados": Estados,
    "llamadas": Llamadas,
    // ...Chat.Pages,
    // ...Usuario.Pages,
}


export const Reducer = {
    // ...Usuario.Reducers,
    // ...Chat.Reducers,
}

export default Pages;