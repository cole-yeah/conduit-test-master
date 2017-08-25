import { combineReducers } from 'redux'
import article from './article'
import home from './home'
import profile from './profile'
import tags from './tags'

const rootReducer = combineReducers({
    article,
    home,
    profile,
    tags
})

export default rootReducer