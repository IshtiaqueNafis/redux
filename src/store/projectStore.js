import {createSlice} from "@reduxjs/toolkit";

let lastId = 0;
const projectSlice = createSlice({
    name: 'projects',
    initialState: [],
    reducers: {
        projectAdded: (project, action) => {
            project.push({
                id: ++lastId,
                name: action.payload.name
            });
        }
    }
})
export const {projectAdded}= projectSlice.actions
export default  projectSlice.reducer