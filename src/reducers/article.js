import * as types from '../constants/actionTypes'

export default function article(state = {}, action) {
    switch(action.type) {
        case types.ARTICLE_PAGE_LOADED:
            return {
                ...state,
                article: action.payload[0].article,
                comments: action.payload[1].comments
            }
        case types.SUBMIT_ARTICLE:
            return {...state, article: action.payload.article}
        default:
            return state
    }
}