const logger = param => store => next => action => {
    console.log(param)
    console.log(`store`, store)
    console.log(`next`, next);
    console.log(`action`, action);
    next(action); // this mus tbe done to make sure action  executes.
}

export default logger;