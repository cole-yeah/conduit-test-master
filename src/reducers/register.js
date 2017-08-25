import * as types from '../constants/actionTypes'

export default function register(state = {username: '', email: '', password: ''}, action) {
    switch(action.type) {
        case types.CHANGE_USERNAME:
            return {...state, username: action.value}
        case types.CHANGE_EMAIL:
            return {...state, email: action.value}
        case types.CHANGE_PASSWORD:
            return {...state, password: action.value}
        default:
            return state
    }
}