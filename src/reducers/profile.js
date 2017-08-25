import * as types from '../constants/actionTypes'

export default function profile(state = {}, action) {
    switch(action.type) {
        case types.LOAD_PROFILE:
            return {
                profile: action.payload[0].profile,
                articles: action.payload[1].articles
            }
        case types.REGISTER_FAIL:
            return state
        case types.REGISTER_SUCCESS:
            return state
        case types.LOGIN_SUCCESS:
            return state
        case types.LOGIN_FAIL:
            return state
        default:
            return state
    }
}