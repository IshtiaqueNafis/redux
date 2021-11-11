import {combineReducers} from "redux";
import bugsReducer from "./bugsStore";
import projectReducer from "./projectStore"

export default combineReducers({
    bugs: bugsReducer,
    projects: projectReducer
})