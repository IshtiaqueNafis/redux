import configureStore from './store/configureStore'
import {bugAdded, bugRemoved, bugResolved} from "./store/bugs";


//region ***Subscribing Store***
configureStore.subscribe(() => console.log("Store Changed", configureStore.getState()))
//endregion

//region ***Dispatch***
/*
dispatch is responsible for updating the state.
 */
configureStore.dispatch(bugAdded("bug1"))
configureStore.dispatch(bugAdded("bug2"))

configureStore.dispatch(bugResolved(1));

//region bugRemovedDispatch
configureStore.dispatch(bugRemoved(1))

//endregion
//endregion

