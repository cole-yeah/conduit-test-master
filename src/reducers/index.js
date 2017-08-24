import { combineReducers } from 'redux'
import article from './article'
import home from './home'
import profile from './profile'

const rootReducer = combineReducers({
    article,
    home,
    profile
})

export default rootReducer