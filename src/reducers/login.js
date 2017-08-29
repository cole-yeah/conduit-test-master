import * as types from '../constants/actionTypes'

export default function login(state = { email: '243461254@qq.com', password: 'yue243461254', hasLogin: false}, action) {
    switch(action.type) {
        case types.LOGIN_EMAIL:
            return {...state, email: action.value}
        case types.LOGIN_PASSWORD:
            return {...state, password: action.value}
        case types.LOGIN_SUCCESS:
            return {...state, user: action.payload, hasLogin: true}
        case types.LOGIN_FAIL:
            return {...state, hasLogin: false}
        default:
            return state
    }
}