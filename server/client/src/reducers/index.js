import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import alljobReducer from "./alljobReducer";
import singlejobReducer from "./singlejobReducer";
import allapplyReducer from "./allapplyReducer";
import singleuserReducer from "./singleuserReducer";
import getCompanyEvent from "./getCompanyEvent";

export default combineReducers({
    auth: authReducer,
    jobs: jobReducer,
    alljobs: alljobReducer,
    job: singlejobReducer,
    allapply: allapplyReducer,
    user: singleuserReducer,
    events: getCompanyEvent
});
