import store from './store/store'
import * as actions from "./Redux/actionTypes/actionTypes";
import {bugAdded, bugRemoved, bugResolved} from "./Redux/actionTypes/actions";

//region ***Subscribing Store***
store.subscribe(() => console.log("Store Changed", store.getState()))
//endregion

//region ***Dispatch***
/*
dispatch is responsible for updating the state.
 */
store.dispatch(bugAdded("bug1"))
store.dispatch(bugAdded("bug2"))

store.dispatch(bugResolved(1));

//region bugRemovedDispatch
store.dispatch(bugRemoved(1))

//endregion
//endregion

