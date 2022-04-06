const initialState = {
    estado: "Not Found",
    geocode: {},
    autoComplete: {},
    detail: {}

}

export default (state, action) => {
    if (!state) return initialState

    if (action.component == "dos") {
        switch (action.type) {
            case "geocode":
                geocode(state, action);
                break;
            case "autoComplete":
                autoComplete(state, action);
                break;
            case "detail":
                detail(state, action);
                break;

        }
        state.type = action.type;
        state.estado = action.estado;
        state.error = action.error;
        state = { ...state };
    }
    return state;
}
const geocode = (state, action) => {
    if (action.estado === "exito") {
        var data = action.data;
        state.geocode[data.latitude + "," + data.longitude] = action.data;
    }
}


const autoComplete = (state, action) => {
    if (action.estado === "exito") {
        var data = action.data;
        state.autoComplete[action.direccion] = action.data;
    }
}

const detail = (state, action) => {
    if (action.estado === "exito") {
        state.detail[action.place_id] = action.data;
    }
}
