import {configureStore} from "@reduxjs/toolkit"; // this configures file to store.

import reducer from "./bugs";


const store = configureStore({
    reducer

})
export default store;