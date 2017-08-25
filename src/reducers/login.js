import * as types from '../constants/actionTypes'

export default function login(state = { email: '', password: ''}, action) {
    switch(action.type) {
        case types.LOGIN_EMAIL:
            return {...state, email: action.value}
        case types.LOGIN_PASSWORD:
            return {...state, password: action.value}
        default:
            return state
    }
}