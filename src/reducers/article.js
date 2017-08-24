import * as types from '../constants/actionTypes'

export default function article(state = {}, action) {
    switch(action.type) {
        case types.ARTICLE_PAGE_LOADED:
            return {
                article: action.payload[0].article,
                comments: action.payload[1].comments
            }
        default:
            return state
    }
}