import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import alljobReducer from "./alljobReducer";
import singlejobReducer from "./singlejobReducer";

export default combineReducers({
    auth: authReducer,
    jobs: jobReducer,
    alljobs: alljobReducer,
    job: singlejobReducer
});
