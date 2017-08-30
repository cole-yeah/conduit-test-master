import * as types from '../constants/actionTypes'

export default function settings(state = {image: '', password: '', username: '', email: '', bio: '', reSetted: false}, action) {
    switch(action.type) {
        case types.SETTINGS_INPUT:
            return {...state, [action.key]: action.value}
        case types.SETTINGS_SUCCESS:
            return {...state, reSetted: true}
        case types.SETTINGS_FAIL:
            return {...state, reSetted: false}
        case types.LOGIN_SUCCESS:
            return {...state, username: action.payload.user.username, bio: action.payload.user.bio, email: action.payload.user.email, reSetted: false}
        default:
            return state
    }
}