import {createAction, createReducer} from "@reduxjs/toolkit";


//region ***Actions Creator***
export const bugAdded = createAction("BUG_ADDED"); // create action takes a payload
export const bugRemoved = createAction("BUG_REMOVED");
export const bugResolved = createAction("BUG_RESOLVED")

//endregion

//region ***Reducer***
let lastId = 0
export default createReducer([], {
    // Based on key value pair
    //keys are actions
    // values are functions
    //actions:values()
    [bugAdded.type]: (bugs, action) => {
        //  [bugAdded.type] --> is the key
        // (bugs, action) --> is the value function
        bugs.push({
            id: ++lastId,
            description: action.payload.description,
            resolved: false
        });
    },

    [bugResolved.type]: (state, action) => {
        const index = state.findIndex(bug => bug.id === action.payload.id)
        state[index].resolved = true
    }
})


//endregion