import { SPageListProps } from 'servisofts-component'
import Actions from './Actions'

import Lista from './Page/Lista'
import NewChat from './Page/NewChat'
import Chat from './Page/Chat'
const Pages: SPageListProps = {
    "chats": Lista,
    "newChat": NewChat,
    "chat": Chat
}


// import usuarioReducer from './Reducer/'\
import chatReducer from './Reducer/chatReducer'
const Reducers = {
    chatReducer
}


export default {
    Pages,
    Actions,
    Reducers
};