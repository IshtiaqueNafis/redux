import {combineReducers} from "redux";
import bugsReducer from "./bugsStore";
import projectReducer from "./projectStore"
import userReducer from "./userStore"

export default combineReducers({
    bugs: bugsReducer,
    projects: projectReducer,
    users:userReducer
})