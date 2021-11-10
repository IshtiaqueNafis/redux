import {createStore} from "redux";
import reducer from "../Redux/reducer/reducer";

const store = createStore(reducer)
export default store;