import store from './store/store'


//region ***Dispatch***
/*
dispatch is responsible for updating the state.
 */
store.dispatch({
    type: 'bugAdded',
    payload: {
        description: 'Bug 1'
    }
})
console.log(`store after bug added dispatch `)
console.log(store.getState()); // 0: {id: 1, description: 'Bug 1', resolved: false}


//region bugRemovedDispatch
store.dispatch({
    type: 'bugRemoved',
    payload: {
        id: 1
    }
})
console.log(`store after bug Removed dispatch `)
console.log(store.getState()) // []
//endregion
//endregion

