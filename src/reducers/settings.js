import * as types from '../constants/actionTypes'

export default function settings(state = {image: '', password: '', username: '', email: '', bio: ''}, action) {
    switch(action.type) {
        case types.SETTINGS_INPUT:
            return {...state, [action.key]: action.value}
        default:
            return state
    }
}