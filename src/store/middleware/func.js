const func = ({dispatch, getState}) => next => action => {
    if (typeof action === 'function') {
        action(dispatch, getState); // means runs this function
    } else {
        next(action); //else runs next action  runs the action
    }
}
export default func