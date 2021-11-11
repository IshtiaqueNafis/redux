import {configureStore,} from "@reduxjs/toolkit"; // this configures file to store.
import reducer from "./reducer";
import logger from 'redux-logger'


const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(logger);
    }

})
export default store;