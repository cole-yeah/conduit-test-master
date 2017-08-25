import * as types from '../constants/actionTypes'

export default function home(state = {}, action) {
    switch(action.type) {
        case types.HOME_PAGE_LOADED:
            return {datas: action.payload, page: action.page, tag: ''}
        case types.LOAD_HOME_BY_TAG:
            return {datas: action.payload, page: action.page, tag: action.tag}
        default:
            return state
    }
}