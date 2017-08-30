import * as types from '../constants/actionTypes'

export default function editor(state = {title: '', description: '', body: '', tagList: '', slug: '', hasChange: false}, action) {
    switch(action.type) {
        case types.EDITOR_INPUT:
            return {...state, [action.key]: action.value, hasChange: false}
        case types.ARTICLE_PAGE_LOADED:
            return {
                ...state,
                title: action.payload[0].article.title,
                description: action.payload[0].article.description,
                body: action.payload[0].article.body,
                tagList: action.payload[0].article.tagList,
                slug: action.payload[0].article.slug,
                hasChange: false,
            }
        case types.SUBMIT_ARTICLE:
            return {
                ...state, 
                title: action.payload.article.title,
                description: action.payload.article.description,
                body: action.payload.article.body,
                tagList: action.payload.article.tagList,
                slug: action.payload.article.slug,
                hasChange: true,
            }
        default:
            return state
    }
}