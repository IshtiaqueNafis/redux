import {createSlice} from "@reduxjs/toolkit";
import {createSelector} from "reselect";

let lastId = 0
const slice = createSlice({
    name: 'bugs',
    initialState: [],
    reducers: {
        bugAssignedUser: (bugs, action) => {
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug => bug.id === bugId);
            bugs[index].userId = userId;
        },

        bugAdded: (bugs, action) => {
            bugs.push({
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            });
        },
        bugResolved: (bugs, action) => {
            const index = bugs.findIndex(bug => bug.id === action.payload.id)
            bugs[index].resolved = true
        }
    }

})

export const {bugAdded, bugResolved,bugAssignedUser} = slice.actions;
export default slice.reducer

//region ***Selector*** -----> Functions takes the state and returns computed state
export const getunresolvedBugsSelector = state =>
    state.entities.bugs.filter(bug => !bug.resolved)

export const gettingBugsByuser = (state,userid) => state.entities.bugs.filter(bug => bug.userId === userid)
//endregion

//region ***createSelector Memoization***
export const getunresolvedBugsMemoization = createSelector(
    state => state.entities.bugs, // first is the state
    bugs => bugs.filter(bug => !bug.resolved) // next
);

export const bugsAssingedtoUsersMemoization = userId => {
    return createSelector(
        state => state.entities.bugs,
        bugs => bugs.filter(bug => bug.userId === userId)
    );
};
// this is same as bugsAssingedtoUsersMemoization(1) ==> pass the id here and create slecltor will be executed

//endregion