import {bugAdded, bugResolved} from "./store/bugs";
import store from "./store/configureStore";


//region ***Subscribing Store***
store.subscribe(() => console.log("Store Changed", store.getState()))
//endregion

//region ***Dispatch***
/*
dispatch is responsible for updating the state.
 */
store.dispatch(bugAdded({description: "bug1"})) // bugAdded({payload is being passed here.})
store.dispatch(bugAdded({description: "bug2"}))


//region bugRemovedDispatch
store.dispatch(bugResolved({id: 1}))

//endregion
//endregion

