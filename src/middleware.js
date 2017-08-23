const promiseMiddleware = store => next => action => {
    if(isPromise(action)) {
        action.payload.then(
            res => {
                console.log('result', res)
                action.payload = res
                store.dispatch(action)
            },
            err => {
                console.log('err', err)
                action.payload = err.response.body
                store.dispatch(action)
            }
        )
        return 
    }
    next(action)
}

const isPromise = action => {
    return action.payload && typeof action.payload.then === 'function'
}

export { promiseMiddleware }