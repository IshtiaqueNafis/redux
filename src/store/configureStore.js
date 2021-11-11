import {configureStore} from "@reduxjs/toolkit"; // this configures file to store.

import reducer from "./reducer";



const store = configureStore({
    reducer

})
export default store;