import * as types from '../constants/actionTypes'

export default function tags(state = {}, action) {
    switch(action.type) {
        case types.LOAD_HOME_TAGS:
            return {...state, tags: action.payload}
        default:
            return state
    }
}