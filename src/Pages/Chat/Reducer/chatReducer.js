const component = "chat";
const initialState = {
    estado: "",
    usuarioLog: {}
}

export default (state, action) => {
    if (!state) { return initialState }
    if (action.component == component) {
        switch (action.type) {
            case "registro":
                registro(state, action);
                break;
            case "editar":
                editar(state, action);
                break;
            case "getAll":
                getAll(state, action);
                break;
            case "getChats":
                getChats(state, action);
                break;
        }
        state.type = action.type;
        state.estado = action.estado;
        state.error = action.error;
        state.lastSend = new Date();
        state = { ...state };
    }
    return state;
}

const getAll = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        console.log(action.data);
        state.data = action.data;
    }
}
const getChats = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data = action.data;
    }
}
const editar = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.data[action.cabecera][action.data.key] = action.data;
    }
}
const registro = (state, action) => {
    state.estado = action.estado;
    if (action.estado === "exito") {
        state.lastRegister = action.data;
        if (state.data) {
            state.data[action.data.key] = action.data;
        }
    }

}