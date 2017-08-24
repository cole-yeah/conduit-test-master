import { combineReducers } from 'redux'
import article from './article'
import home from './home'

const rootReducer = combineReducers({
    article,
    home
})

export default rootReducer