import * as types from '../constants/actionTypes'

export default function profile(state = {}, action) {
    switch(action.type) {
        case types.LOAD_PROFILE:
            return {
                profile: action.payload,
            }
        default:
            return state
    }
}