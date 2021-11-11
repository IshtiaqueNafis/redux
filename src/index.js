import {
    bugAdded,
    bugAssignedUser,
    bugResolved,
    bugsAssingedtoUsersMemoization,
    gettingBugsByuser,
    getunresolvedBugsMemoization,
    getunresolvedBugsSelector
} from "./store/bugsStore";
import store from "./store/configureStore";
import {projectAdded} from "./store/projectStore";
import {userAdded} from "./store/userStore";


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
const unresolvedBugs = getunresolvedBugsSelector(store.getState());
store.dispatch(userAdded({name: 'nafis'}));
store.dispatch(userAdded({name: 'nafu'}));
store.dispatch(userAdded({name: 'ishtiaque'}));
store.dispatch(bugAssignedUser({bugId: 1, userId: 1}))
const bugAssignedtoUser = gettingBugsByuser(store.getState(), 1)


console.log(unresolvedBugs)
const unresolvedBugsMemo = getunresolvedBugsMemoization(store.getState())
console.log(unresolvedBugsMemo);
const bugsAssingedTouser = bugsAssingedtoUsersMemoization(1)(store.getState());
console.log(bugsAssingedTouser)
//region bugRemovedDispatch


//endregion
//endregion

