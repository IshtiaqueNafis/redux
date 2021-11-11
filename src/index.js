import {bugAdded, bugResolved, getunresolvedBugs} from "./store/bugsStore";
import store from "./store/configureStore";
import {projectAdded} from "./store/projectStore";


//region ***Subscribing Store***
store.subscribe(() => console.log("Store Changed", store.getState()))
//endregion

//region ***Dispatch***
/*
dispatch is responsible for updating the state.
 */
store.dispatch(bugAdded({description: "bug1"})) // bugAdded({payload is being passed here.})
store.dispatch(bugAdded({description: "bug2"}))
store.dispatch(bugAdded({description: "bug3"}))

store.dispatch(projectAdded({name: "project 1"}))
store.dispatch(bugResolved({id: 1}))
const unresolvedBugs = getunresolvedBugs(store.getState());

console.log(unresolvedBugs)
//region bugRemovedDispatch


//endregion
//endregion

