import * as types from '../constants/actionTypes'

import createHistory from 'history/createBrowserHistory'

const history = createHistory()

export default function login(state = { email: '', password: '', hasLogin: false}, action) {
    switch(action.type) {
        case types.LOGIN_EMAIL:
            return {...state, email: action.value}
        case types.LOGIN_PASSWORD:
            return {...state, password: action.value}
        case types.LOGIN_SUCCESS:
            console.log('history', history)
            history.replace('/register')
            return {...state, user: action.payload, hasLogin: true}
        case types.LOGIN_FAIL:
            console.log(action.payload)
            return {...state, hasLogin: false}
        default:
            return state
    }
}