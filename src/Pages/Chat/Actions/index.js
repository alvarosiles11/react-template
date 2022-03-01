import { SNavigation, SStorage } from "servisofts-component";
import SSocket from "servisofts-socket";

const component = "chat";
export default class Actions {
    static registro(data, props) {
        var object = {
            component: component,
            type: "registro",
            estado: "cargando",
            key_usuario: !props.state.usuarioReducer.usuarioLog ? "" : props.state.usuarioReducer.usuarioLog.key,
            data: data,
        }
        SSocket.send(object);
    }
    static getAll(props) {
        var data = props.state.chatReducer.data;
        if (!data) {
            if (props.state.chatReducer.estado == "cargando") {
                return;
            }
            var object = {
                component: component,
                type: "getAll",
                estado: "cargando",
                key_usuario: !props.state.usuarioReducer.usuarioLog ? "" : props.state.usuarioReducer.usuarioLog.key,
                data: data,
            }
            SSocket.send(object);
            return;
        }
        return data;
    }
    static getChats(props) {
        var data = props.state.chatReducer.data;
        if (!data) {
            if (props.state.chatReducer.estado == "cargando") {
                return;
            }
            var object = {
                component: component,
                type: "getChats",
                estado: "cargando",
                key_usuario: !props.state.usuarioReducer.usuarioLog ? "" : props.state.usuarioReducer.usuarioLog.key,
                data: data,
            }
            SSocket.send(object);
            return;
        }
        return data;
    }
}