import * as types from '../constants/actionTypes'

export default function editor(state = {title: '', description: '', body: '', tagList: ''}, action) {
    switch(action.type) {
        case types.EDITOR_INPUT:
            return {...state, [action.key]: action.value}
        default:
            return state
    }
}