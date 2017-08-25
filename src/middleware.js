const promiseMiddleware = store => next => action => {
    console.log('action....', action)
    if(isPromise(action)) {
        action.payload.then(
            res => {
                console.log('result', res)
                action.payload = res
                store.dispatch(action)
                if(action.type.length && action.type.length>1) {
                    const successType = action.type[0]
                    store.dispatch({...action, type: successType})
                }else {
                    store.dispatch(action)
                }
            },
            err => {
                console.log('err', err)
                action.payload = err.response.body
                alert(err)
                if(action.type.length && action.type.length>0) {
                    const failType = action.type[1]
                    store.dispatch({...action, payload: err, type: failType})
                }else {
                    store.dispatch({...action})
                }
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