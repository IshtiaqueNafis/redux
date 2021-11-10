import store from './store/store'
import * as actions from "./Redux/actionTypes/actionTypes";
//region ***Subscribing Store***
store.subscribe(() => console.log("Store Changed", store.getState()))
//endregion

//region ***Dispatch***
/*
dispatch is responsible for updating the state.
 */
store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'Bug 1'
    }
})
console.log(`store after bug added dispatch `)
console.log(store.getState()); // 0: {id: 1, description: 'Bug 1', resolved: false}


//region bugRemovedDispatch
store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 1
    }
})
console.log(`store after bug Removed dispatch `)
console.log(store.getState()) // []
//endregion
//endregion

