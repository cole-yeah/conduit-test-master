import * as types from '../constants/actionTypes'

export default function home(state = {}, action) {
    switch(action.type) {
        case types.HOME_PAGE_LOADED:
            return {datas: action.payload, page: action.page, tag: ''}
        case types.LOAD_HOME_BY_TAG:
            return {datas: action.payload, page: action.page, tag: action.tag}
        case types.LOADING_START:
        return {...state, isFetching: true}
        case types.LOADING_END:
            return {...state, isFetching: false}
        default:
            return state
    }
}