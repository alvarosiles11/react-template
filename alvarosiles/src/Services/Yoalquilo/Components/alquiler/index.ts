const component = "alquiler";
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Item from "./Components/Item";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import Reducer from "./Reducer";
// import ReducerEjemplo1 from "./ReducerEjemplo1";
// import ReducerEjemplo2 from "./ReducerEjemplo2";

export default {
    component,
    version,
    Actions,
    Components: {
        Item,
    },
    Pages: {
        [component + "/admin/lista"]: Lista,
        [component + "/Registro"]: Registro,
    },
    Reducers: {
        [component + 'Reducer']: Reducer,
        // ReducerEjemplo1,
        // ReducerEjemplo2,
    },
}