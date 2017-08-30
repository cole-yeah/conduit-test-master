import agent from './actions/action'
import { LOADING_START, LOADING_END } from './constants/actionTypes'

let localStorage = window.localStorage

const promiseMiddleware = store => next => action => {
    console.log('action....', action)
    if(isPromise(action)) {
        action.payload.then(
            res => {
                store.dispatch({type: LOADING_START, subType: action.type})
                console.log('result', res)
                action.payload = res
                if(typeof(action.type) === 'object' && action.type.length && action.type.length>1) {
                    const successType = action.type[0]
                    store.dispatch({...action, type: successType})
                } else {
                    store.dispatch(action)
                }
                store.dispatch({type: LOADING_END, subType: action.type})
            },
            err => {
                store.dispatch({type: LOADING_START, subType: action.type})
                console.log('err', err)
                action.payload = err.response.body
                alert(err)
                if(action.type.length && action.type.length>0) {
                    const failType = action.type[1]
                    store.dispatch({...action, payload: err, type: failType})
                }else {
                    store.dispatch({...action})
                }
                store.dispatch({type: LOADING_END, subType: action.type})
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
    }else if(action.type === 'SETTINGS_LOGOUT') {
        console.log('清除token!!!')
        localStorage.token = ''
        agent.setToken(null)
        console.log('清除token成功!!!')
    }
    next(action)
}

export { promiseMiddleware, localStorageMiddleware }