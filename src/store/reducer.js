import {combineReducers} from "redux";
import enttiesReducers from "./entities"

export default combineReducers({
    entities: enttiesReducers
})