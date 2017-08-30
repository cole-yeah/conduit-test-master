import agent from './actions/action'

let localStorage = window.localStorage

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

const localStorageMiddleware = store => next => action => {
    if(action.type === 'LOGIN_SUCCESS') {
        console.log('设置token！！！')
        localStorage.token = action.payload.user.token
        agent.setToken(action.payload.user.token)
        console.log('设置token成功！！！')
    }
    next(action)
}

export { promiseMiddleware, localStorageMiddleware }